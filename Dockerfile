FROM node:16-alpine as angular

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

RUN [ "npm", "run", "build" ]

FROM nginx:alpine

VOLUME [ "/var/cache/nginx" ]
COPY --from=angular app/dist/financeiro-javagas-angular/ /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf