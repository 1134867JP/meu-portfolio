# João Pedro — Portfólio

Portfólio pessoal de João Pedro Rodrigues, Desenvolvedor FullStack com foco em PHP, Laravel e PostgreSQL.

**Live:** [joaopedrodev.com.br](https://joaopedrodev.com.br)

## Stack

- **React 19** + **Vite** — SPA com HMR
- **Tailwind CSS 3** — estilização utilitária
- **Framer Motion** — animações e interações
- **GitHub Pages** — deploy automático via GitHub Actions

## Seções

- Hero, Sobre, Skills, Projetos, Experiência, Contato

## Desenvolvimento

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build para produção
npm run preview  # preview do build
```

## Deploy

Push para `main` ou `master` dispara o workflow em `.github/workflows/deploy.yml`, que faz build e publica no GitHub Pages automaticamente.

## Configuração do formulário de contato

O formulário usa [Formspree](https://formspree.io). Para ativar:

1. Crie uma conta em formspree.io e crie um novo form
2. Substitua `YOUR_FORM_ID` em `src/components/Contact.jsx` pelo ID gerado

## CV

Coloque o arquivo `cv.pdf` na pasta `public/` para ativar o botão de download.
