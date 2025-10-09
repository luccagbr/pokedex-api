FROM node:alpine

WORKDIR /etc/app

COPY package.json package-lock.json ./

RUN npm install typescript nodemon -g

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:dev"]
