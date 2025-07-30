// /app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { produtos } from "@/data/produtos"

export const dynamic = "force-dynamic"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  
})

export async function POST(req: NextRequest) {
  try {
    const { id } = (await req.json()) as { id?: string }
    if (!id) {
      return NextResponse.json(
        { error: "ID do produto é obrigatório" },
        { status: 400 }
      )
    }

    const produto = produtos.find((p) => p.id === id)
    if (!produto) {
      return NextResponse.json(
        { error: "Produto não encontrado" },
        { status: 404 }
      )
    }

    // Descobre a origem para montar as URLs de retorno
    const url = new URL(req.url)
    const origin =
      process.env.NEXT_PUBLIC_BASE_URL ?? `${url.protocol}//${url.host}`

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      // Metadados para recuperarmos no download/webhook
      metadata: {
        productId: produto.id,
      },
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: produto.nome,
            },
            unit_amount: produto.preco, // preço confiável do servidor
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/loja`,
    })

    return NextResponse.json({ id: session.id })
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: "Erro ao criar sessão de checkout" },
      { status: 500 }
    )
  }
}
