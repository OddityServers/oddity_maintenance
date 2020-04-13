# https://hub.docker.com/_/nginx
FROM nginx

COPY build /usr/share/nginx/html
