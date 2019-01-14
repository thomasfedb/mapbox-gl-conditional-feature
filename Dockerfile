FROM node:8.15.0-alpine

RUN mkdir /app && chown node:node /app

USER node
WORKDIR /app
