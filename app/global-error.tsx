"use client"

import { Button } from "@/components/ui/button"
import * as Sentry from "@sentry/nextjs"
import { Ghost } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
          <div className="text-center space-y-4">
            <Ghost className="w-24 h-24 text-destructive mx-auto" />
            <h1 className="text-4xl font-bold text-foreground">Ocorreu um erro inesperado</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Lamentamos o transtorno. Nossa equipe foi notificada e está trabalhando para resolver o problema.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="/">Voltar para a página inicial</Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
