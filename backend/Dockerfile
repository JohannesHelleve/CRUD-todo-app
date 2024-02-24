FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

ENV NODE_ENV=production

COPY . .

EXPOSE 8787

CMD ["npm", "start"]