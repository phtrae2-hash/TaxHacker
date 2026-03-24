import Stripe from "stripe"
import config from "./config"

export const stripeClient: Stripe | null = config.stripe.secretKey
  ? new Stripe(config.stripe.secretKey, {
      apiVersion: "2025-03-31.basil",
    })
  : null

export type Plan = {
  code: string
  name: string
  description: string
  benefits: string[]
  price: string
  stripePriceId: string
  limits: {
    storage: number
    ai: number
  }
  isAvailable: boolean
}

export const PLANS: Record<string, Plan> = {
  unlimited: {
    code: "unlimited",
    name: "Ilimitado",
    description: "Plano especial ilimitado",
    benefits: ["Armazenamento ilimitado", "Análise de IA ilimitada", "Tudo ilimitado"],
    price: "",
    stripePriceId: "",
    limits: {
      storage: -1,
      ai: -1,
    },
    isAvailable: false,
  },
  early: {
    code: "early",
    name: "Plano Inicial",
    description: "Plano com desconto para nossos primeiros usuários",
    benefits: [
      "Preço especial para planos iniciais",
      "512 Mb de armazenamento",
      "1000 análises de arquivos com IA",
      "Transações ilimitadas",
      "Campos, categorias e projetos ilimitados",
    ],
    price: "entrar em contato",
    stripePriceId: "price_1RHTj1As8DS4NhOzhejpTN3I",
    limits: {
      storage: 512 * 1024 * 1024,
      ai: 1000,
    },
    isAvailable: true,
  },
}