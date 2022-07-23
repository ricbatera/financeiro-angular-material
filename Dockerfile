FROM node:16 as projeto

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.21.6
VOLUME /var/cache/nginx
COPY --from=projeto ./app/dist/financeiro-javagas-angular /usr/share/nginx/html
EXPOSE 80