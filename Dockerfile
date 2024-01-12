FROM node:alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 13003
EXPOSE 27679

FROM base AS dev
ENV CHOKIDAR_USEPOLLING=true
CMD ["npm", "run", "dev"]