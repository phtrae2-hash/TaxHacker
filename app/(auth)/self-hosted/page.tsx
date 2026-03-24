import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ColoredText } from "@/components/ui/colored-text"
import config from "@/lib/config"
import { PROVIDERS } from "@/lib/llm-providers"
import { getSelfHostedUser } from "@/models/users"
import { ShieldAlert } from "lucide-react"
import Image from "next/image"
import { redirect } from "next/navigation"
import SelfHostedSetupFormClient from "./setup-form-client"

export default async function SelfHostedWelcomePage() {
  if (!config.selfHosted.isEnabled) {
    return (
      <Card className="w-full max-w-xl mx-auto p-8 flex flex-col items-center justify-center gap-6">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <ShieldAlert className="w-6 h-6" />
          <span>Modo Self-Hosted não está habilitado</span>
        </CardTitle>
        <CardDescription className="text-center text-lg flex flex-col gap-2">
          <p>
            Para usar o AutomateContábil em modo self-hosted, chame o suporte
            <code className="font-bold"></code> 
          </p>
          <p>
            No modo self-hosted você pode usar sua própria chave da API do ChatGPT e armazenar seus dados no seu próprio servidor.
          </p>
        </CardDescription>
      </Card>
    )
  }

  const user = await getSelfHostedUser()
  if (user) {
    redirect(config.selfHosted.redirectUrl)
  }

  const defaultProvider = PROVIDERS[0].key
  const defaultApiKeys: Record<string, string> = {
    openai: config.ai.openaiApiKey ?? "",
    google: config.ai.googleApiKey ?? "",
    mistral: config.ai.mistralApiKey ?? "",
  }

  return (
    <Card className="w-full max-w-xl mx-auto p-8 flex flex-col items-center justify-center gap-4">
      <Image src="/logo/512.png" alt="Logo" width={144} height={144} className="w-36 h-36" />
      <CardTitle className="text-3xl font-bold ">
        <ColoredText>AutomateContábil: Edição Self-Hosted</ColoredText>
      </CardTitle>
      <CardDescription className="flex flex-col gap-4 text-center text-lg">
        <p>Bem-vindo à sua própria instância do AutomateContábil. Vamos configurar algumas opções para começar.</p>
        <SelfHostedSetupFormClient defaultProvider={defaultProvider} defaultApiKeys={defaultApiKeys} />
      </CardDescription>
    </Card>
  )
}

export const dynamic = "force-dynamic"