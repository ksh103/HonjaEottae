FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
RUN npm install express socket.io socket.io-client @types/socket.io-client concurrently

FROM nginx:stable-alpine as production-stage
COPY  ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /root/

COPY --from=ui-build /usr/src/app/out /usr/share/nginx/html
#COPY --from=ui-build /etc/letsencrypt/live/j6e103.p.ssafy.io/fullchain.pem /usr/share/nginx/html
#COPY --from=ui-build /etc/letsencrypt/live/j6e103.p.ssafy.io/privkey.pem /usr/share/nginx/html
#EXPOSE 3080
CMD ["nginx", "-g", "daemon off;"]

