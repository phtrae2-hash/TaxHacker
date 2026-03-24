import config from "@/lib/config"

export default async function Terms() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">Termos de Serviço</h1>
      <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
        <strong className="text-slate-700">Data de Vigência:</strong> 22 de abril de 2025
        <br />
        <strong className="text-slate-700">Serviço:</strong>{" "}
        <a href="https://AutomateContábil.app" className="text-blue-600 hover:text-blue-800">
          https://AutomateContábil.app
        </a>
        <br />
        <strong className="text-slate-700">Contato:</strong>{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
      </p>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Estes Termos de Serviço (&quot;Termos&quot;) regem seu acesso e uso do AutomateContábil, um analisador automático
        de faturas e rastreador de despesas impulsionado por inteligência artificial (IA). Ao acessar ou utilizar
        nossos serviços, você concorda em se vincular a estes Termos.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Visão Geral do Serviço</h2>
      <p className="text-slate-700 mb-3">A AutomateContábil oferece:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Uma <strong className="text-slate-800">plataforma baseada em nuvem</strong> com planos pagos
          (mensal/anual)
        </li>
        <li>
          Uma <strong className="text-slate-800">versão auto-hospedada</strong> disponível gratuitamente, sem
          garantias de suporte
        </li>
      </ul>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Os usuários podem enviar faturas e recibos, analisar transações e gerenciar despesas por meio de
        ferramentas baseadas em IA. O serviço é principalmente destinado a profissionais autônomos e pequenas
        empresas.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Elegibilidade e Uso da Conta</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Você deve ter pelo menos <strong className="text-slate-800">18 anos de idade</strong> para usar o
          AutomateContábil.
        </li>
        <li>
          Você pode registrar e manter <strong className="text-slate-800">múltiplas contas</strong>.
        </li>
        <li>
          Você é responsável por manter a confidencialidade das credenciais de acesso e por todas as atividades
          realizadas sob sua conta.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Assinaturas e Pagamentos</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Os planos pagos são gerenciados por <strong className="text-slate-800">Stripe</strong> e todas as assinaturas{" "}
          <strong className="text-slate-800">são renovadas automaticamente</strong>, a menos que sejam canceladas.
        </li>
        <li>Você pode cancelar sua assinatura ou excluir sua conta a qualquer momento por meio do seu painel.</li>
        <li>
          Oferecemos uma <strong className="text-slate-800">política de reembolso sem perguntas</strong>, mas
          reservamos o direito de <strong className="text-slate-800">deduzir custos</strong> relacionados ao uso de
          IA (por exemplo, consumo de tokens) e às cobranças de serviços de terceiros já incorridas.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Responsabilidades do Usuário</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Você pode enviar qualquer fatura ou recibo <strong className="text-slate-800">a seu critério</strong>, porém{" "}
          <strong className="text-slate-800">você é o(a) único(a) responsável</strong> pelo conteúdo enviado.
        </li>
        <li>
          <strong className="text-slate-800">Materiais ilegais, fraudulentos ou protegidos por direitos autorais</strong>{" "}
          sem autorização são estritamente proibidos. Violações podem levar à suspensão imediata da conta ou ao seu
          encerramento.
        </li>
        <li>
          Você{" "}
          <strong className="text-slate-800">não pode redistribuir, revender ou oferecer nossa análise de IA ou nossos serviços</strong>{" "}
          a terceiros sem nosso consentimento prévio e por escrito.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Uso de IA e Integrações de Terceiros</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          O AutomateContábil utiliza <strong className="text-slate-800">OpenAI (ChatGPT)</strong> e outras APIs de terceiros para
          processar e analisar documentos.
        </li>
        <li>
          Ao utilizar o serviço, você nos autoriza a processar seus dados por meio desses provedores, sob salvaguardas
          apropriadas do GDPR.
        </li>
        <li>
          Podemos permitir <strong className="text-slate-800">plugins e integrações</strong> desenvolvidos pela comunidade
          para ampliar as funcionalidades.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Propriedade Intelectual</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Você mantém <strong className="text-slate-800">a plena titularidade</strong> do conteúdo enviado e de toda a análise
          resultante.
        </li>
        <li>
          O AutomateContábil <strong className="text-slate-800">não reivindica quaisquer direitos</strong> sobre seus dados.
        </li>
        <li>
          Você tem liberdade para <strong className="text-slate-800">reutilizar, baixar, publicar ou exportar</strong> qualquer
          dado processado pelo serviço.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Limitações de Responsabilidade</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          O AutomateContábil é fornecido <strong className="text-slate-800">&quot;no estado em que se encontra&quot;</strong>, sem
          garantias de qualquer tipo.
        </li>
        <li>
          Não oferecemos <strong className="text-slate-800">quaisquer garantias</strong> quanto à precisão de saídas geradas por IA
          nem quanto à adequação dos nossos serviços para fins contábeis, de declaração de impostos ou de conformidade.
        </li>
        <li className="bg-yellow-50 p-3 border-l-4 border-yellow-400">
          <strong className="text-slate-800">⚠️ Important:</strong> AutomateContábil is{" "}
          <strong className="text-slate-800">não é um substituto</strong> para aconselhamento tributário ou jurídico profissional.
          Você utiliza o serviço <strong className="text-slate-800">por sua conta e risco</strong>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Modificações do Serviço e Encerramento</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Reservamo-nos o direito de <strong className="text-slate-800">modificar ou descontinuar</strong> o serviço a qualquer
          momento, com ou sem aviso prévio.
        </li>
        <li>Podemos suspender ou encerrar sua conta caso você viole estes Termos ou abuse do serviço.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Lei Aplicável e Resolução de Conflitos</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Estes Termos são regidos pelas leis de <strong className="text-slate-800">Alemanha</strong>.<br />
        Quaisquer disputas serão resolvidas exclusivamente nos tribunais localizados em{" "}
        <strong className="text-slate-800">Alemanha</strong>, a menos que a legislação aplicável exija o contrário.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Alterações a Estes Termos</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Podemos revisar estes Termos a qualquer momento. Se realizarmos alterações relevantes, avisaremos os usuários por
        e-mail ou por notificação dentro do aplicativo. O uso continuado após as alterações implica aceitação dos novos
        Termos.
      </p>
    </div>
  )
}
