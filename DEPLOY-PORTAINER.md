# Deploy no Portainer (tax.lojabb.com.br)

## 1. Pré-requisitos

- Rede `portainerRede` criada no Portainer (Docker network)
- DNS de `tax.lojabb.com.br` apontando para o IP da VPS
- Traefik configurado com `websecure` e `letsencryptresolver`

## 2. Push para o GitHub

```bash
git add .
git commit -m "Deploy Portainer: stack para tax.lojabb.com.br"
git push origin main
```

## 3. Criar a Stack no Portainer

1. **Portainer** → **Stacks** → **Add stack**
2. Nome: `taxhacker`
3. **Build method**: Git Repository
4. **Repository URL**: `https://github.com/phtrae2-hash/TaxHacker.git`
5. **Compose path**: `docker-compose.portainer.yml`
6. **Environment variables** (obrigatório alterar):

   | Name | Value |
   |------|-------|
   | `POSTGRES_PASSWORD` | Senha forte para o PostgreSQL |
   | `BETTER_AUTH_SECRET` | Saída de `openssl rand -base64 32` |

7. **Deploy the stack**

## 4. Variáveis opcionais

Para análise de faturas com IA, adicione no deploy:

- `OPENAI_API_KEY` — chave da OpenAI
- `GOOGLE_API_KEY` — ou Google AI
- `MISTRAL_API_KEY` — ou Mistral

## 5. Acesso

Após o deploy: **https://tax.lojabb.com.br**

Na primeira visita: configure o provedor de IA e a moeda padrão na tela de setup.

## 6. Atualizar (novo deploy)

1. Faça push das alterações no GitHub
2. **Portainer** → **Stacks** → **taxhacker** → **Editor**
3. Clique em **Update the stack** (ou "Pull and redeploy" se disponível)
