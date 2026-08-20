# Cadu Valezzi — Site pessoal (Next.js)

Landing page para captação de clientes freelance, com foco em desenvolvimento web criativo.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Antes de publicar, edite:

- `components/Contact.tsx` — troque `WHATSAPP_NUMBER` (formato internacional, só dígitos, ex: 5511999999999) e `CONTACT_EMAIL` pelos seus dados reais.
- `components/Contact.tsx` — o formulário hoje só simula o envio (`handleSubmit`). Para receber os e-mails de verdade, conecte a um serviço como Resend, Formspree ou uma API route própria.
- `components/Portfolio.tsx` — substitua os projetos de exemplo pelos seus cases reais conforme forem surgindo.
- `components/Footer.tsx` — atualize os links de LinkedIn/GitHub.
- `app/layout.tsx` — ajuste a descrição/metadata se quiser.

## Deploy

O jeito mais simples é publicar na [Vercel](https://vercel.com) (mesma empresa do Next.js, plano gratuito é suficiente):

1. Suba este projeto para um repositório no GitHub
2. Importe o repositório em vercel.com/new
3. Deploy automático a cada push

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion (animações)
- Lucide React (ícones)
