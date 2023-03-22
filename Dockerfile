FROM node:16-alpine

WORKDIR /backoffice

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn dev