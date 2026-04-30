# Econverse — Teste Front-End Júnior

Vitrine de produtos desenvolvida com React, TypeScript e SCSS.

## Tecnologias
- React 18 + TypeScript
- Vite
- SCSS (Sass) como pré-processador CSS

## Como rodar

### Pré-requisitos
- Node.js >= 18

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse http://localhost:5173

### Build para produção
```bash
npm run build
npm run preview
```

## Funcionalidades
- Vitrine consumindo API JSON externa
- Modal ao clicar no produto com seletor de quantidade
- Skeleton loader durante carregamento
- Layout responsivo mobile-first
- HTML semântico e acessibilidade (ARIA, teclado)
- SEO: meta tags, lang, heading hierarchy

## Decisões técnicas
- **SCSS global** em arquivo único para manter consistência e reutilizar variáveis em todos os componentes
- **Custom hook `useProducts`** para isolar a lógica de fetch e separar responsabilidades
- **Sem bibliotecas de UI** — todos os componentes são escritos do zero conforme exigido