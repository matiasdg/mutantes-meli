#!/bin/bash

sh ./run-db.sh

while ! docker logs mutantes-db | grep -c "ready for start up" > /dev/null
do
    printf "."
    sleep 1
done


docker stop mutantes-meli-container
docker rm mutantes-meli-container

docker build -t matiasdg/mutantes-meli .

docker run -it --link mutantes-db:postgres -p 8080:8080 --name mutantes-meli-container matiasdg/mutantes-meli

