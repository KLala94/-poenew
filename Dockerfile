ARG NODE_VERSION=14.16-alpine
FROM node:14.18.0
WORKDIR      /home/node/app/
COPY /       /home/node/app/
RUN npm ci
CMD ["node", "server.js"]
