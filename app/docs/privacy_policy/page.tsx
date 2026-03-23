import config from "@/lib/config"

export default async function PrivacyPolicy() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">
        <strong>Política de Privacidade</strong>
      </h2>

      <p className="text-slate-700 mb-6 leading-relaxed bg-yellow-50 p-3 border-l-4 border-yellow-400">
        <strong className="text-slate-800">TL;DR:</strong> Se você realmente se preocupa com a privacidade dos seus dados,
        utilize nossa versão auto-hospedada. Nenhuma nuvem é totalmente segura. Use a plataforma por sua conta e
        risco.
      </p>

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

      <p className="text-slate-700 mb-6 leading-relaxed">
        A TaxHacker (&quot;nós&quot;, &quot;nosso&quot;, &quot;nossa&quot;) está comprometida em proteger sua privacidade. Esta
        Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais quando você
        utiliza nossos serviços em{" "}
        <a href="https://taxhacker.app" className="text-blue-600 hover:text-blue-800">
          taxhacker.app
        </a>
        .
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        1. <strong>Quais Dados Nós Coletamos</strong>
      </h3>
      <p className="text-slate-700 mb-3">
        Coletamos os seguintes tipos de dados quando você utiliza a TaxHacker:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>
          <strong className="text-slate-800">Dados da Conta</strong>: Endereço de e-mail, nome de exibição e imagem
          de avatar opcional. Não armazenamos senhas.
        </li>
        <li>
          <strong className="text-slate-800">Dados de Comunicação</strong>: Mensagens de e-mail que enviamos para
          verificação, atualizações ou newsletters.
        </li>
        <li>
          <strong className="text-slate-800">Arquivos Enviados</strong>: Faturas, recibos e quaisquer outros arquivos
          que você envie, os quais podem conter informações pessoais ou financeiras sensíveis.
        </li>
        <li>
          <strong className="text-slate-800">Metadados da Sessão</strong>: Endereço IP, tipo de navegador e registros
          de data/hora para segurança da sessão.
        </li>
        <li>
          <strong className="text-slate-800">Dados de Uso do Serviço</strong>: Metadados relacionados à sua atividade
          na plataforma (por exemplo: número de arquivos enviados e uso de tokens de IA).
        </li>
      </ul>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        2. <strong>Como Usamos Seus Dados</strong>
      </h3>
      <p className="text-slate-700 mb-3">Usamos seus dados para:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
        <li>Criar e gerenciar sua conta na TaxHacker</li>
        <li>Armazenar e analisar os arquivos enviados</li>
        <li>Melhorar sua organização financeira com insights baseados em IA</li>
        <li>Comunicar você sobre sua conta e atualizações do serviço</li>
        <li>Cumprir obrigações legais</li>
      </ul>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        3. <strong>Processamento Baseado em IA</strong>
      </h3>
      <p className="text-slate-700 mb-3">
        Utilizamos serviços externos de IA, especificamente <strong className="text-slate-800">OpenAI (ChatGPT)</strong>, para:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>Extrair e interpretar informações de faturas usando OCR</li>
        <li>Analisar dados financeiros para obter insights mais relevantes</li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Ao utilizar a TaxHacker, você concorda com a transferência dos dados relevantes para esses provedores terceiros
        para fins de processamento. Esses provedores podem operar fora da UE, em conformidade com salvaguardas
        apropriadas sob o GDPR (por exemplo, SCCs).
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        4. <strong>Cookies e Rastreamento</strong>
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        A TaxHacker <strong className="text-slate-800">não utiliza cookies de rastreamento</strong> nem analytics de terceiros.
        Coletamos apenas logs agregados de acesso e estatísticas de uso via <strong className="text-slate-800">Cloudflare</strong>,
        para desempenho e segurança da infraestrutura.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        5. <strong>Armazenamento de Dados e Segurança</strong>
      </h3>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>
          Todos os dados são armazenados em servidores na <strong className="text-slate-800">Alemanha</strong>, hospedados pela{" "}
          <strong className="text-slate-800">Hetzner Cloud</strong>.
        </li>
        <li>Arquivos e dados pessoais são armazenados sem criptografia.</li>
        <li>O acesso aos dados pessoais é limitado a membros autorizados da equipe, apenas para depuração ou suporte.</li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed bg-yellow-50 p-3 border-l-4 border-yellow-400">
        Embora nos esforcemos para manter salvaguardas razoáveis, nenhum sistema é totalmente seguro. Use a plataforma
        por sua conta e risco.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        6. <strong>Base Legal para o Tratamento</strong>
      </h3>
      <p className="text-slate-700 mb-3">Tratamos dados pessoais com base em:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>
          <strong className="text-slate-800">Seu consentimento</strong>, que você fornece ao criar uma conta ou enviar dados
        </li>
        <li>
          <strong className="text-slate-800">Nossas obrigações contratuais</strong> para fornecer os serviços para os quais você
          se inscreveu
        </li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Você pode retirar seu consentimento a qualquer momento, excluindo sua conta ou entrando em contato conosco diretamente.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        7. <strong>Retenção de Dados</strong>
      </h3>
      <p className="text-slate-700 mb-3">Mantemos seus dados:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>Enquanto sua conta permanecer ativa</li>
        <li>Até você solicitar a exclusão</li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Após a exclusão, seus dados são removidos de nossos sistemas, embora alguns registros residuais possam permanecer por
        um curto período devido a backups ou necessidades operacionais.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        8. <strong>Seus Direitos (nos termos do GDPR e leis semelhantes)</strong>
      </h3>
      <p className="text-slate-700 mb-3">Como usuário, você tem o direito de:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
        <li>acessar e revisar seus dados pessoais</li>
        <li>corrigir ou atualizar informações imprecisas</li>
        <li>baixar um backup completo de seus dados</li>
        <li>solicitar a exclusão permanente de sua conta e dos dados associados</li>
        <li>se opor a determinadas formas de tratamento</li>
        <li>apresentar uma reclamação a uma autoridade de proteção de dados</li>
      </ul>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Para exercer seus direitos, entre em contato conosco em{" "}
        <a href={`mailto:${config.app.supportEmail}`} className="text-blue-600 hover:text-blue-800">
          {config.app.supportEmail}
        </a>
        .
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        9. <strong>Privacidade de Menores</strong>
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        A TaxHacker <strong className="text-slate-800">não se destina a usuários menores de 18 anos</strong>. Não coletamos nem
        armazenamos dados de menores de forma consciente.
      </p>

      <hr className="my-8 border-slate-200" />

      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        10. <strong>Alterações Nesta Política</strong>
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página com
        uma &quot;Data de Vigência&quot; atualizada. Recomendamos que você revise a política periodicamente.
      </p>
    </div>
  )
}
