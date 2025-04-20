# Etapa 1: build com TypeScript
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: imagem leve para rodar
FROM node:18-slim

WORKDIR /app

COPY --from=build /app/package*.json ./
RUN npm install --omit=dev

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

ENV NODE_ENV=production

# Gere o client do Prisma (opcional, caso use no runtime)
RUN npx prisma generate

EXPOSE 3333

CMD ["node", "dist/server.js"]
