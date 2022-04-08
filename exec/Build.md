## 💻 사용 도구 및 버전

**[Common]**
<img src="https://img.shields.io/badge/gitlab-181717?style=for-the-badge&logo=gitlab&logoColor=white"><img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">

- GitLab version: 13.12.6
- Jira version: 8.2.1



**[frontend]**
<img src="https://img.shields.io/badge/-next.js-blue?style=for-the-badge&logo=next.js&logoColor=white"><img src="https://img.shields.io/badge/React-2196f3?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"><img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/Socket.io-F8DC75?style=for-the-badge&logo=Socket.io&logoColor=white"><img src="https://img.shields.io/badge/TYPESCRIPT-94EB32?style=for-the-badge&logo=TYPESCRIPT&logoColor=white">

- next.js version: 12.1.0
- React version: 17.0.2
- npm version: 8.5.0
- Node.js version: 8.5.0

- Socket.io version: 4.4.1
- Typescript version: 4.6.2



**[Hadoop]**
<img src="https://img.shields.io/badge/hadoop-00BFFF?style=for-the-badge&logo=hadoop&logoColor=white"><img src="https://img.shields.io/badge/sqoop-94EB32?style=for-the-badge&logo=sqoop&logoColor=white">

- hadoop version: 2.5.0
- sqoop version: 1.4.7



**[Backend-python]**
<img src="https://img.shields.io/badge/python-F8DC75?style=for-the-badge&logo=python&logoColor=white"><img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=Flask&logoColor=white">

- python version: 3.8.5
- Flask version: 2.0.3



**[Backend-Java]**
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"><img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">

- spring version: 2.5.8
- java version: openjdk version: 11.0.14.1



**[Backend-Server]**
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"><img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"><img src="https://img.shields.io/badge/docker-00AFFF?style=for-the-badge&logo=docker&logoColor=white"><img src="https://img.shields.io/badge/dockercompose-8c8c8c?style=for-the-badge&logo=docker-compose&logoColor=white"><img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">

- nginx version: nginx/1.20.2
- mysql version: 8.0.28-0ubuntu0.20.04.3 for Linux on x86_64
- Docker version: 20.10.13
- docker-compose version: 1.25.0
- jenkins version: Jenkins 2.339



 ##  &#127746;빌드 환경 변수

- git clone : <a>https://lab.ssafy.com/s06-bigdata-dist-sub2/S06P22E103.git
- Mysql 설정: application.properties에 DB 설정 추가
- 프론트엔드: VSCode에 npm install,npm run build, npm run start  실행
- 백엔드: IntelliJ에 import 하여 실행



## 📃 DB 접속 정보

- Driver = com.mysql.cj.jdbc.Driver
- ConnectionURL = jdbc:mysql://j6e103.p.ssafy.io:3306/ssafy?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Seoul
- Username = ssafy
- Password = ssafy



 ## 🚢 배포

- AWS EC2 이용하여 배포
- Nginx 설치
- conf 파일 설정
  - /home/ubuntu/S06P22E103/frontend/nginx/nginx.conf

  
      server {
              listen 80 default_server;
              listen [::]:80 default_server;
      
              server_name j6e103.p.ssafy.io;
      
              access_log /var/log/nginx/access.log;
              error_log /var/log/nginx/error.log;
      
              location / {
                       alias /usr/share/nginx/html;
                       try_files $uri $uri/ /index.html;
                       return 301 https://$server_name$request_uri;
              }
      
              # location ~* \.io {
              #         proxy_set_header X-Real-IP $remote_addr;
              #         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
              #         proxy_set_header Host $http_host;
              #         proxy_set_header X-NginX-Proxy false;
      
              #         proxy_pass http://j6e103.p.ssafy.io:4002;
              #         proxy_redirect off;
      
              #         proxy_http_version 1.1;
              #         proxy_set_header Upgrade $http_upgrade;
              #         proxy_set_header Connection "upgrade";
              # }
      
              index index.html;
      }
      
      server {
              listen 443 ssl;
              listen [::]:443 ssl;
      
      #        listen 4002 ssl;
      #        listen [::]:4002 ssl;
      
              server_name j6e103.p.ssafy.io;
      
              ssl_certificate /var/www/html/fullchain.pem;
              ssl_certificate_key /var/www/html/privkey.pem;
      
              root /usr/share/nginx/html;
              index index.html;
      
              location / {
                      try_files $uri $uri/ /index.html;
                      proxy_connect_timeout 300s;
                      proxy_read_timeout 600s;
                      proxy_send_timeout 600s;
                      proxy_buffers 8 16k;
                      proxy_buffer_size 32k;
      
                              root /usr/share/nginx/html;
                              index index.html;
      
                      proxy_hide_header Access-Controller-Allow-Origin;
                      add_header 'Access-Control-Allow-Origin' '*';
      
                      proxy_ssl_server_name on;
                      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                      proxy_set_header X-Real-IP $remote_addr;
                      proxy_set_header Host $http_host;
                      proxy_http_version 1.1;
              }
      
              location /api {
                      proxy_http_version 1.1;
                      proxy_pass https://j6e103.p.ssafy.io:8443;
                      charset utf-8;
      
                      proxy_set_header Host $http_host;
                      proxy_set_header X-Real-IP $remote_addr;
                      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                      proxy_set_header X-Forwarded-Proto $scheme;
                      proxy_set_header X-Forwarded-Host $host;
                      proxy_set_header X-Forwarded-Port $server_port;
              }
      
              #socket.io.js파일 전용.
              # location /socket.io {
              #         add_header Access-Control-Allow-Origin *;
              #         proxy_pass https://j6e103.p.ssafy.io:4002;
              #         proxy_set_header X-Real-IP $remote_addr;
              #         proxy_set_header Host $http_host;
              #         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
              #         proxy_set_header Origin "";
      
                       # WebSocket support
              #         proxy_http_version 1.1;
              #         proxy_set_header Upgrade $http_upgrade;
              #         proxy_set_header Connection "upgrade";
              #        large_client_header_buffers 4 16k;
              # }
      }
      
      server {
              listen 4002 ssl;
              listen [::]:4002 ssl;
      
              server_name j6e103.p.ssafy.io;
      
              ssl_certificate /var/www/html/fullchain.pem;
              ssl_certificate_key /var/www/html/privkey.pem;
      
              #root /usr/share/nginx/html;
              #index index.html;
      
              server_name j6e103.p.ssafy.io;
              large_client_header_buffers 4 16k;
      
              location / {
                       add_header Access-Control-Allow-Origin *;
                       proxy_pass https://j6e103.p.ssafy.io:4003;
                       proxy_set_header X-Real-IP $remote_addr;
                       proxy_set_header Host $http_host;
                       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                       proxy_set_header Origin "";
      
                       # WebSocket support
                       proxy_http_version 1.1;
                       proxy_set_header Upgrade $http_upgrade;
                       proxy_set_header Connection "upgrade";
              }
      }
      
      server {
              listen 5001 ssl;
              listen [::]:5001 ssl;
      
              server_name j6e103.p.ssafy.io;
      
              ssl_certificate /var/www/html/fullchain.pem;
              ssl_certificate_key /var/www/html/privkey.pem;
      
              root /usr/share/nginx/html;
              index index.html;
      
              location / {
                      proxy_http_version 1.1;
                      proxy_pass https://j6e103.p.ssafy.io:5000;
                      charset utf-8;
      
                      proxy_set_header Host $http_host;
                      proxy_set_header X-Real-IP $remote_addr;
                      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                      proxy_set_header X-Forwarded-Proto $scheme;
                      proxy_set_header X-Forwarded-Host $host;
                      proxy_set_header X-Forwarded-Port $server_port;
              }
      }
  
  
  ​     