FROM node:13-alpine as build
WORKDIR /app
RUN rm package-lock.json
COPY package*.json /app/
RUN npm install -g yarn
RUN yarn add ionic
RUN yarn add
COPY ./ /app/
RUN npm run-script build:prod
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/