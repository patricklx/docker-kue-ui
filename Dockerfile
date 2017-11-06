FROM mhart/alpine-node:6

ENV SENTINEL_HOST ${SENTINEL_HOST}

WORKDIR /src
ADD . .

RUN npm install --production
RUN npm install -g redis-commander

EXPOSE 5000
EXPOSE 8081
CMD npm start & redis-commander --sentinel-host $SENTINEL_HOST
