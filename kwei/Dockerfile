FROM alpine:3.20

ENV NODE_VERSION 22.13.0

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
