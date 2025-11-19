# 1️⃣ Base: Node.js Alpine
FROM node:20-alpine AS base

# Instala dependências necessárias
RUN apk add --no-cache libc6-compat

# Define diretório de trabalho
WORKDIR /app

# 2️⃣ Builder: compila a aplicação
FROM base AS builder

# Copia package.json e package-lock.json
COPY package.json package-lock.json ./

# Instala dependências
RUN npm ci

# Copia todo o código-fonte
COPY . .

# Gera build otimizado
RUN npm run build

# 3️⃣ Production: standalone
FROM node:20-alpine AS production

# Diretório de trabalho no container
WORKDIR /app

# Variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Cria usuário e grupo não privilegiado
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Cria diretórios necessários e garante permissão
RUN mkdir -p /app/.next/cache && \
    chown -R nextjs:nodejs /app

# 1️⃣ Copia o standalone (contém server.js)
COPY --from=builder /app/.next/standalone ./.next/standalone

# 2️⃣ Copia arquivos estáticos do build
COPY --from=builder /app/.next/static ./.next/static

# 3️⃣ Copia public assets (imagens, manifest, favicon)
COPY --from=builder /app/public ./public

# 4️⃣ Copia next.config.mjs
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Usa usuário não privilegiado para rodar
USER nextjs

# Expõe porta 3000
EXPOSE 3000


CMD ["node", ".next/standalone/server.js"]
