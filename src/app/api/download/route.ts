// /app/api/download/route.ts
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import fs from "fs/promises"
import path from "path"

export const runtime = "nodejs" // necessário para usar fs
export const dynamic = "force-dynamic"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  
})

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json({ error: "session_id ausente" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Pagamento não confirmado" },
        { status: 403 }
      )
    }

    // Podemos escolher o arquivo conforme o produto comprado (se tiver vários)
    const productId = (session.metadata?.productId as string) ?? "pack-dash"

    // Mapeie cada produto para seu arquivo correspondente
    const fileMap: Record<string, string> = {
      "pack-dash": "pack-dashboard.zip",
      // "outro-produto": "outro.zip",
    }

    const fileName = fileMap[productId]
    if (!fileName) {
      return NextResponse.json(
        { error: "Arquivo não mapeado para o produto" },
        { status: 500 }
      )
    }

    const filePath = path.join(process.cwd(), "private", fileName)
    const fileBuffer = await fs.readFile(filePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "no-store",
      },
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: "Erro ao processar download" },
      { status: 500 }
    )
  }
}
