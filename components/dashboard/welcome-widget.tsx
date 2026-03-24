import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ColoredText } from "@/components/ui/colored-text"
import { getCurrentUser } from "@/lib/auth"
import { getSettings, updateSettings } from "@/models/settings"
import { Banknote, ChartBarStacked, FolderOpenDot, Key, TextCursorInput, X } from "lucide-react"
import { revalidatePath } from "next/cache"
import Image from "next/image"
import Link from "next/link"

export async function WelcomeWidget() {
  const user = await getCurrentUser()
  const settings = await getSettings(user.id)

  return (
    <Card className="flex flex-col lg:flex-row items-start gap-10 p-10 w-full">
      <Image src="/logo/1024.png" alt="Logo" width={256} height={256} className="w-64 h-64" />
      <div className="flex flex-col">
        <CardTitle className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            <ColoredText>Olá, sou seu assistente tributário 👋</ColoredText>
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={async () => {
              "use server"
              await updateSettings(user.id, "is_welcome_message_hidden", "true")
              revalidatePath("/")
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription className="mt-5">
          <p className="mb-3">
            Sou um aplicativo de contabilidade que ajuda o(a) usuário(a) a lidar com recibos, cheques e faturas sem fim
            com IA. Veja o que eu posso fazer:
          </p>
          <ul className="mb-5 list-disc pl-5 space-y-1">
            <li>
              <strong>Envie uma foto ou um PDF</strong> e eu vou reconhecê-lo, categorizá-lo e salvá-lo como uma
              transação para seu(a) consultor(a) tributário(a).
            </li>
            <li>
              Eu posso <strong>converter moedas automaticamente</strong> e consultar as taxas de câmbio para uma data
              específica.
            </li>
            <li>
              Eu também <strong>suporto cripto!</strong> Inclusive com taxas históricas para staking.
            </li>
            <li>
              Todos os <strong>prompts de LLM são configuráveis</strong>: para campos, categorias e projetos. Você pode
              acessar Configurações e ajustá-los da forma que preferir.
            </li>
            <li>
              Eu salvo os dados em um <strong>banco de dados SQLite local</strong> e posso exportá-los em arquivos CSV
              e ZIP.
            </li>
            <li>
              Você também pode <strong>criar seus próprios campos</strong> para serem analisados e eles serão incluídos
              na exportação CSV para seu(a) consultor(a) tributário(a).
            </li>
            <li>
              Caso tenha algum <strong>report</strong> a fazer encaminhe para nossa equipe.
            </li>
          </ul>
          <p className="mb-3">
            Embora eu possa economizar muito tempo na categorização de transações e na geração de relatórios, ainda
            recomendo fortemente que os resultados sejam revisados por um(a) consultor(a) tributário(a) profissional
            ao declarar seus impostos!
          </p>
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-8">
          {settings.openai_api_key === "" && (
            <Link href="/settings/llm">
              <Button>
                <Key className="h-4 w-4" />
                Forneça aqui sua chave do ChatGPT
              </Button>
            </Link>
          )}
          <Link href="/settings">
            <Button variant="outline">
              <Banknote className="h-4 w-4" />
              Moeda padrão: {settings.default_currency}
            </Button>
          </Link>
          <Link href="/settings/categories">
            <Button variant="outline">
              <ChartBarStacked className="h-4 w-4" />
              Categorias
            </Button>
          </Link>
          <Link href="/settings/projects">
            <Button variant="outline">
              <FolderOpenDot className="h-4 w-4" />
              Projetos
            </Button>
          </Link>
          <Link href="/settings/fields">
            <Button variant="outline">
              <TextCursorInput className="h-4 w-4" />
              Campos personalizados
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
