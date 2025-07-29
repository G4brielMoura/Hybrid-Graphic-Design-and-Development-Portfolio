import Stripe from "stripe"
import { NextResponse } from "next/server"

// Use a versão mais recente da API Stripe conforme exigido pelo SDK
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {

})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validação mínima dos dados recebidos
    if (!body?.nome || !body?.descricao || !body?.preco) {
      return NextResponse.json(
        { error: "Dados incompletos no corpo da requisição." },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: body.nome,
              description: body.descricao,
            },
            unit_amount: body.preco,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sucesso`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/loja`,
    })

    return NextResponse.json({ id: session.id })
  } catch (error: any) {
    console.error("Erro ao criar sessão de checkout:", error)
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    )
  }
}
