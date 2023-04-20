FROM node:latest

WORKDIR /app

COPY package*.json yarn.lock* ./

RUN npm install -g yarn

RUN yarn install  --frozen-lockfile

RUN yarn global add @vue/cli

COPY . .

