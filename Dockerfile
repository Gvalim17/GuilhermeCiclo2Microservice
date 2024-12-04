FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set strict-ssl false
RUN npm install


COPY . .
COPY ./.env ./.env
RUN npx prisma db pull
RUN npx prisma generate

RUN npm run build

CMD ["node", "dist/main"]
