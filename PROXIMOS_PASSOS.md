# Cadu Valezzi — próximos passos

O site está pronto e o build de produção passa sem erros. Antes de publicar, só faltam 2 ajustes:

## 1. Seus dados de contato reais
Arquivo: `components/Contact.tsx`, linhas 7-8

```ts
const WHATSAPP_NUMBER = "5511999999999"; // troque pelo seu número (só dígitos, com DDI 55 + DDD)
const CONTACT_EMAIL = "contato@caduvalezzi.dev"; // troque pelo seu e-mail real
```

## 2. Conectar o formulário de contato a um envio real
Hoje o formulário só simula sucesso no navegador — nenhuma mensagem é enviada de fato.
Para receber os contatos por e-mail, a forma mais simples é usar o **Resend** (tem plano
gratuito) ou o **Formspree** (não exige backend, só um endpoint). Se quiser, no próximo
passo eu já deixo isso implementado — é só me confirmar qual dos dois prefere.

## Como rodar localmente
```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## Como publicar
O jeito mais simples é a [Vercel](https://vercel.com) (mesma empresa do Next.js, plano
gratuito cobre esse tipo de site): conecta o repositório do GitHub e cada push já publica
uma nova versão automaticamente.

## Estrutura do site
- `Hero` — headline com efeito de digitação, gradiente que reage ao mouse
- `About` — sua formação e experiência
- `Services` — serviços oferecidos
- `Portfolio` — cases (projetos FIAP + 1 estudo de caso para PME)
- `Process` — como funciona do contato à entrega
- `FAQ` — perguntas frequentes (acordeão)
- `Contact` — WhatsApp + formulário
- `Footer`
