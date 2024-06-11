FROM node:20-alpine

WORKDIR /app

COPY app app
COPY package* server.js ./

RUN npm install express mongoose cors --save

USER node

EXPOSE 8080

CMD ["node", "server.js"]
