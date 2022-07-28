# Install dependencies
FROM node:14-alpine AS deps
WORKDIR /app/frontend
COPY package*.json ./
RUN npm ci

# Build app and run
FROM node:14-alpine
WORKDIR /app/frontend
COPY --from=deps /app/frontend/node_modules ./node_modules
COPY . .
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "run", "start"]
