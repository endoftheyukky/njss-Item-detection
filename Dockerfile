FROM node:latest

WORKDIR /app

COPY package*.json yarn.lock* ./

RUN yarn install  --frozen-lockfile

RUN yarn global add @vue/cli

COPY . .

