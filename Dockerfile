FROM node:23.1.0-alpine
WORKDIR /myapp

COPY package*.json .

RUN npm install

COPY . .

EXPOSE ${APP_PORT}
CMD ["npm", "start"]