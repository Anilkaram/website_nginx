FROM nginx:alpine
LABEL maintainer="Anilkumar"
COPY . /usr/share/nginx/html/
EXPOSE 80