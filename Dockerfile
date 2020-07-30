### STAGE 1: Build ###

FROM node:8.12.0-alpine as build

WORKDIR /frontend

COPY package.json .
COPY yarn.lock .
COPY src/ ./src
COPY public/ ./public

RUN yarn --prod
RUN yarn build

### STAGE 2: Setup & Run ###

FROM node:8.12.0-alpine

WORKDIR /frontend

RUN yarn add express

COPY package.json .
COPY ./server.js .
COPY --from=build /frontend/build /frontend/build

WORKDIR /frontend

CMD ["yarn", "serve"]
