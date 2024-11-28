FROM node:23-alpine3.19

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD ["echo", "The container were build successfully"]
CMD ["node", "src/index.js"]

