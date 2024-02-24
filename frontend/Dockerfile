FROM node:20

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

ENV NODE_ENV=development

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]