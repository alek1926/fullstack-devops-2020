FROM node:alpine

WORKDIR /usr/src/app

COPY ./dist .

EXPOSE 3000

CMD ["node", "cmykToHsl/src/HttpServer.js"]