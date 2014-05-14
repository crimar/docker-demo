# Docker Demo

## Building and Running a NodeJS Container

From the repository root:

```bash
\# if run from non-Linux:
vagrant up
vagrant ssh

cd node
docker build -t myapp .
docker run -d --name myapp1 -p 8080:80 myapp

while true; do (curl http://localhost:8080 &); sleep 1s; done
```

Repeat with a modified `app.js` and port 8081.

## Running an nginx Proxy

```bash
docker run -d --name nginx -p 8082:80 -v `pwd`/log:/var/log/nginx -v `pwd`/sites:/etc/nginx/sites-available dockerfile/nginx
```

From a second terminal:

```bash
while true; do (curl http://localhost:8080 &); sleep 1s; done
```

From first terminal:

```bash
docker kill -s HUP nginx
```

## Cleanup

```bash
docker ps -a -q | xargs docker stop | xargs docker rm
docker images | egrep -v 'nginx|nodejs' | cut -c 41-52 | xargs docker rmi
```

## Warm-Up

```bash
docker pull dockerfile/nodejs
docker pull dockerfile/nginx
```
