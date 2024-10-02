FROM node:10-alpine
RUN mkdir -p /ddc/node_modules && chown -R node:node /ddc
WORKDIR /ddc
COPY package*.json ./
USER node
RUN npm install prod
COPY --chown=node:node . .
EXPOSE 3000
CMD node bin/www