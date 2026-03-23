import config from "@/lib/config"

export default async function AI() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Aviso de Uso de IA</h1>

      <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
        <strong className="text-slate-700">Data de Vigência</strong>: 22 de abril de 2025
        <br />
        <strong className="text-slate-700">E-mail de Contato</strong>:{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
        <br />
        <strong className="text-slate-700">Domínio</strong>:{" "}
        <a href="https://taxhacker.app" className="text-blue-600 hover:text-blue-800">
          https://taxhacker.app
        </a>
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Na TaxHacker, utilizamos inteligência artificial (&quot;IA&quot;) para viabilizar as funcionalidades centrais da nossa
        plataforma. Este documento descreve como e por que utilizamos tecnologias de IA, quais dados são processados e como
        isso pode afetar você, como usuário.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Finalidade da IA na TaxHacker</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        A IA é essencial para a experiência na TaxHacker. Ela é utilizada para:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>Reconhecimento ótico de caracteres (OCR) de faturas e recibos digitalizados</li>
        <li>Categorização automática e marcação de transações financeiras</li>
        <li>Resumo de despesas e descrições de fornecedores</li>
        <li>Preenchimento inteligente de campos e autofill em formulários</li>
        <li>Fluxos de trabalho personalizados orientados por prompts</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Todo o conteúdo gerado por IA é exibido diretamente na interface do usuário e pode ser aplicado às suas
        transações, projetos e relatórios.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Provedores e Modelos de IA</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Nossa versão hospedada na nuvem utiliza modelos fornecidos por <strong>OpenAI</strong>, incluindo:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>
          <strong>gpt-4o-mini</strong> and <strong>gpt-4.1-mini</strong>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Na <strong>versão auto-hospedada</strong>, os usuários podem optar por conectar seus próprios modelos de linguagem
        ou backends de IA. Não monitoramos nem avaliamos essas configurações e não assumimos responsabilidade pelo resultado
        obtido.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Dados Enviados para Processamento de IA</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Para disponibilizar funcionalidades baseadas em IA, enviamos dados selecionados do usuário para a API da OpenAI,
        incluindo:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>Documentos enviados (por exemplo: recibos, faturas)</li>
        <li>Metadados associados às transações e campos fornecidos pelo usuário</li>
        <li>Contexto histórico de transações anteriores (se necessário para a análise)</li>
      </ul>
      <p className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
        <strong className="text-amber-600">⚠️ Observação:</strong> esses dados <strong>não são anonimizados nem mascarados</strong>{" "}
        antes do envio. Ao utilizar a TaxHacker, você reconhece e consente com essa transferência.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Armazenamos <strong>saídas estruturadas</strong> geradas pela IA (por exemplo: campos extraídos, categorização) na sua conta
        para uso futuro. Nós <strong>não</strong> armazenamos prompts ou respostas brutas da IA além do que for necessário para
        preencher seus dados.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Participação Humana</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nós <strong>não</strong> revisamos manualmente o conteúdo gerado por IA. No momento, não há mecanismo para revisão
        humana, sinalização de erros ou correções.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Os usuários são exclusivamente responsáveis por verificar a exatidão das saídas processadas por IA antes de utilizá-las
        para fins financeiros ou de relatórios.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Desativação voluntária e dependência essencial</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        O processamento por IA é um componente fundamental da TaxHacker e não pode ser desativado. Se você não concorda com o
        processamento de seus dados por IA, não deve utilizar a plataforma.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Tomada de Decisão Automatizada</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nossos sistemas de IA não tomam decisões legais ou financeiras vinculantes em seu nome. No entanto, eles podem sugerir
        categorias, valores ou resumos com base nos dados que você fornece.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Embora essas saídas possam influenciar a forma como seus dados são estruturados ou interpretados, elas{" "}
        <strong>não são utilizadas para tomar decisões automatizadas com efeitos legais ou de grande relevância</strong>, conforme
        definido no Artigo 22 do GDPR.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Riscos e Limitações</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        As saídas geradas por IA são probabilísticas e podem conter erros, omissões ou interpretações incorretas. Nós não{" "}
        <strong>oferecemos garantias de exatidão</strong>, completude ou adequação para fins tributários, legais ou financeiros.
      </p>
      <p className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
        <strong className="text-red-600">⚠️ Importante:</strong> a TaxHacker <strong>não é um substituto</strong> para um
        contador certificado, consultor tributário ou advogado. Utilize por sua conta e risco.
      </p>
    </div>
  )
}
