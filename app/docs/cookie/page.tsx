import config from "@/lib/config"

export default async function Cookie() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">Política de Cookies</h1>
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
        Esta Política de Cookies explica como a AutomateContábil utiliza cookies e tecnologias semelhantes quando você visita
        nosso site ou utiliza nossos serviços.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. O que são Cookies?</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Cookies são arquivos de texto pequenos armazenados em seu dispositivo pelo navegador quando você visita websites.
        Eles são amplamente utilizados para tornar os sites mais eficientes e para fornecer informações aos responsáveis pelo site.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Como Utilizamos Cookies</h2>
      <p className="text-slate-700 mb-3">
        Utilizamos cookies <strong className="text-slate-800">exclusivamente para finalidades essenciais</strong>, incluindo:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          Manutenção de <strong className="text-slate-800">sessões e autenticação</strong> do usuário
        </li>
        <li>
          Habilitação de <strong className="text-slate-800">cache e melhorias de desempenho</strong>
        </li>
        <li>
          Garantia de <strong className="text-slate-800">segurança</strong>, incluindo proteção contra DDoS e bots por meio do Cloudflare
        </li>
      </ul>
      <p className="text-slate-700 mb-3">
        Nós <strong className="text-slate-800">não</strong> utilizamos cookies para:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>Publicidade ou rastreamento comportamental</li>
        <li>Análises ou perfis</li>
        <li>Serviços de publicidade de terceiros</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Infraestrutura de Terceiros</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Dependemos de um número limitado de serviços de terceiros que podem definir seus próprios cookies ou utilizar tecnologias relacionadas:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-slate-200 rounded-lg">
          <thead className="bg-slate-50">
            <tr>
              <th className="border border-slate-200 px-6 py-3 text-left text-sm font-semibold text-slate-700">
                Provedor
              </th>
              <th className="border border-slate-200 px-6 py-3 text-left text-sm font-semibold text-slate-700">
                Finalidade
              </th>
              <th className="border border-slate-200 px-6 py-3 text-left text-sm font-semibold text-slate-700">
                Uso de Cookies
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                <strong className="text-slate-800">Cloudflare</strong>
              </td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                CDN, cache, segurança e proteção contra bots
              </td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">Sim (essencial)</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                <strong className="text-slate-800">Stripe</strong>
              </td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                Processamento de pagamentos (assinaturas, cobrança)
              </td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">Sim (essencial)</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                <strong className="text-slate-800">GitHub</strong>
              </td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                Recursos incorporados ou OAuth (se utilizado)
              </td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                Possivelmente, se incorporado
              </td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                <strong className="text-slate-800">Sentry</strong>
              </td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">Monitoramento de erros da aplicação</td>
              <td className="border border-slate-200 px-6 py-4 text-sm text-slate-700">
                Não utiliza cookies, mas pode coletar metadados do navegador
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Suas Preferências de Cookies</h2>
      <p className="text-slate-700 mb-4 leading-relaxed">
        No momento, não exibimos um banner de cookies, pois utilizamos apenas cookies estritamente necessários para a
        operação do site.
      </p>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Se preferir, você pode bloquear ou excluir cookies por meio das configurações do seu navegador. No entanto,
        essa ação pode afetar a funcionalidade central do site, incluindo login e persistência de sessão.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Atualizações desta Política</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Podemos atualizar esta Política de Cookies periodicamente. A versão mais recente sempre estará disponível
        nesta página, com a &quot;Data de Vigência&quot; atualizada de acordo.
      </p>

      <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Contato</h2>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Para dúvidas sobre o uso de cookies, entre em contato conosco em{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
        .
      </p>
    </div>
  )
}
