import { getCurrentUser } from "@/lib/auth"
import { stripeClient } from "@/lib/stripe"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  if (!stripeClient) {
    return new NextResponse("O cliente do Stripe não está inicializado", { status: 500 })
  }

  try {
    if (!user.stripeCustomerId) {
      return NextResponse.json({ error: "Não foi encontrado o ID do cliente do Stripe para este usuário" }, { status: 400 })
    }

    const portalSession = await stripeClient.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${request.nextUrl.origin}/settings/profile`,
    })

    return NextResponse.redirect(portalSession.url)
  } catch (error) {
    console.error("Stripe portal error:", error)
    return NextResponse.json({ error: "Falha ao criar a sessão do portal do Stripe" }, { status: 500 })
  }
}
