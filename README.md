# Portfólio — Gabriel Meiado

Portfólio pessoal feito com React, TypeScript, Tailwind CSS e Framer Motion, empacotado com Vite.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção em dist/
```

O conteúdo fica em `src/data.ts` e as tecnologias em `src/skills.tsx`. A foto é lida de `src/assets/photo.png`.

## Deploy

Cada push na branch `main` publica o site no GitHub Pages pelo workflow em `.github/workflows/deploy.yml`.
Para funcionar, o repositório deve se chamar `Meiado.github.io` (site na raiz) e, em *Settings → Pages*, a fonte deve ser *GitHub Actions*.
