# ---------- deps ----------
FROM node:20.17-alpine AS deps
WORKDIR /app
ENV HUSKY=0
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ---------- build ----------
FROM node:20.17-alpine AS build
WORKDIR /app
ENV HUSKY=0
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build || true

# ---------- runtime ----------
FROM node:20.17-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
RUN addgroup -g 10001 app && adduser -u 10001 -G app -D app
COPY --from=build /app ./
USER 10001
EXPOSE 3000
CMD ["yarn", "start"]
