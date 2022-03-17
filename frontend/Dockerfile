FROM node:14-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

ENV NODE_ENV production

RUN npx next build
RUN npx next start
FROM nginx:stable-alpine as production-stage
COPY  ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/.next /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
