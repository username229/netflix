# Netflix Clone (README em Português)

Projeto front-end estilo "Netflix" construído com Next.js + TypeScript. Este README foca em como executar o projeto localmente (Node e Docker) e em dicas rápidas de troubleshooting.

---

## Resumo rápido

- Framework: Next.js (App Router)
- Linguagem: TypeScript
- Estilos: SCSS
- Containerização: Docker (Dockerfile multi-stage) e docker-compose para orquestração local

---

## Executar com Docker (PowerShell)

Pré-requisitos:
- Docker Desktop instalado e em execução
- Espaço livre no disco (pelo menos alguns GB)

1) Construir a imagem (na raiz do projeto):

```powershell
docker build -t netflix-clone:latest .
```

2) Executar o container (mapeando a porta 3000):

```powershell
docker run --rm -p 3000:3000 --env-file .env.local netflix-clone:latest
```

3) Usando docker-compose (opção recomendada para desenvolvimento local):

```powershell
docker-compose up --build
# parar e remover recursos criados pelo compose
docker-compose down --volumes
```

Observações:
- Se o build dentro do Docker falhar com erro relacionado a `npm ci`, verifique se `package-lock.json` existe na raiz do projeto.
- Se ocorrerem erros de módulos faltando ou arquivos SCSS inexistentes, rode `npm ci` e `npm run build` localmente para reproduzir antes de contêinerizar.

---

## Diferença rápida: Dockerfile vs docker-compose

- Dockerfile: descreve como construir uma imagem (passos de build). Use para criar a imagem de produção.
- docker-compose: descreve como executar um conjunto de serviços/contêineres (porta, volumes, variáveis). Use para orquestrar a aplicação localmente (dev) ou com serviços adicionais.

---

## Executar localmente (sem Docker)

Se preferir testar sem Docker, use PowerShell:

```powershell
# instalar dependências exatas
npm ci

# servidor de desenvolvimento (hot reload)
npm run dev

# build de produção e start
npm run build
npm run start
```



---

## Variáveis de ambiente


```env
NEXT_PUBLIC_TMDB_API_KEY=seu_api_key_aqui
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
PORT=3000
NODE_ENV=production
```

---

## Estrutura (visão geral)

```
.
├── public/           # assets públicos
├── src/              # código da aplicação (app router, components, services)
├── Dockerfile        # Docker multi-stage para produção
├── docker-compose.yml# compose opcional para dev
├── package.json      # scripts e dependências
└── README.md         # este arquivo
```

---

## Scripts principais

Use localmente (PowerShell):

```powershell
npm run dev      # iniciar em modo desenvolvimento
npm run build    # build otimizado para produção
npm run start    # iniciar servidor de produção (após build)
```

---

## Troubleshooting rápido

- "next is not recognized": execute `npm ci` e `npm run build` localmente para garantir que as dependências estão instaladas.
- "ENOSPC" durante `npm ci`: libere espaço (limpar cache do npm, limpar %TEMP%, remover imagens/containers Docker não usados) e tente novamente.
- "Module not found" / arquivos SCSS faltando: verifique imports com alias (`@/...`) e existência dos arquivos referidos.

---

## Observação sobre renomeação

Este projeto está configurado como **Netflix Clone**. Quaisquer referências a nomes antigos de projeto (por exemplo, MovieMate) foram removidas ou atualizadas.

---

## Próximos passos sugeridos

- Se quiser que eu rode o build local (`npm ci` + `npm run build`) e/ou a imagem Docker, libere espaço em disco e me avise; eu posso executar os comandos e reportar os erros restantes.
- Posso também gerar um guia passo-a-passo em português mais detalhado (como publicar a imagem no Docker Hub, criar tags semânticas, ou configurar CI).

---

# 🎬 Netflix Clone

<div align="center">

![Netflix Clone](https://img.shields.io/badge/Netflix_Clone-v2.0.0-red?style=for-the-badge&logo=netflix)
![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)
![SCSS](https://img.shields.io/badge/SCSS-Styled-pink?style=for-the-badge&logo=sass)

**Professional Netflix clone with TMDB API, authentication, and favorites system!**

[ Docker Hub](https://hub.docker.com) • [ Documentation](README.md) • [Live Demo](http://localhost:3000)

</div>

---

## Quick Start with Docker

```bash
Netflix Clone

A compact Netflix-style frontend built with Next.js and TypeScript. This repository contains a React + Next.js app (App Router) and Docker support so you can run it locally in containers.

---

## Quick summary

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: SCSS
- Containerized with Docker (multi-stage Dockerfile + docker-compose)

---

## Docker (how to run locally — PowerShell)

Prerequisites:
- Docker Desktop installed and running
- At least 2–4 GB free disk space and available RAM

1) Build the image (from the project root):

```powershell
# build a production image
docker build -t netflix-clone:latest .
```

2) Run the image (map port 3000):

```powershell
# run the container and map port 3000
docker run --rm -p 3000:3000 --env-file .env.local netflix-clone:latest
```

3) With docker-compose (if you prefer compose orchestration):

```powershell
# build and run defined services from docker-compose.yml
docker-compose up --build

# stop and remove containers, networks and volumes created by compose
docker-compose down --volumes
```

Notes:
- If you see "npm ci" errors during Docker build, make sure `package-lock.json` exists in the project root. If build fails inside the container due to missing files or modules, run a local `npm ci` and `npm run build` to catch errors before containerizing.

---

## Difference: Dockerfile vs docker-compose (short)

- Dockerfile: describes how to build a single container image (steps, dependencies, build commands). Use it to create the production image for the app.
- docker-compose: describes how multiple services (containers) run together and their runtime configuration (ports, volumes, environment). Use it to run the app with supporting services or a development setup.

Use a Dockerfile to build the image and docker-compose to orchestrate services (for local dev or multi-container setups).

---

## Running locally (node) — quick checks

If you prefer to test locally without Docker, do this on your machine (PowerShell):

```powershell
# install exact dependencies
npm ci

# development server
npm run dev

# production build + start
npm run build
npm run start
```

If `npm ci` fails with ENOSPC (no space left on device), free disk space then retry.

---

## Environment variables

Create a `.env.local` file in the project root with the variables the app expects (example):

```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
PORT=3000
NODE_ENV=production
```

Do not commit secrets.

---

## Project structure (high level)

```
.
├── public/           # static assets
├── src/              # application source (app router, components, services)
├── Dockerfile        # multi-stage Dockerfile for production image
├── docker-compose.yml# optional compose for development / orchestration
├── package.json      # scripts and dependencies
└── README.md         # this file
```

---

## Scripts (common)

Key NPM scripts you can run locally:

```powershell
npm run dev        # start dev server (hot reload)
npm run build      # build production optimized app
npm run start      # start production server (after build)
```

---

## Troubleshooting quick tips

- "next is not recognized" — run `npm ci` then `npm run build` locally to ensure dependencies are installed.
- "ENOSPC" during `npm ci` — free disk space (clean npm cache, clear temp, prune docker images) then retry.
- Module not found / missing files — check imports that reference `@/...` paths (ensure `tsconfig.json` paths are present) and that SCSS files exist for components importing them.

---

## Contributing

Contributions welcome — open issues or PRs for improvements.

---

If you want, I can now (without changing source code) add a short Docker section to the top of `README.md` in Portuguese instead, or produce a concise checklist of the exact commands you should run on Windows (PowerShell) to build and run the container. Tell me which you prefer.
