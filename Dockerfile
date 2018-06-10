FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE  8080

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["bash", "entrypoint.sh"]