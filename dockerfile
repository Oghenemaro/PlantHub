FROM node:bullseye

WORKDIR /projects/planthub

COPY --chown=node:node  package.json package-lock.json ./

RUN npm install 

COPY --chown=node:node . .

USER node


EXPOSE 3000

CMD ["npm", "start"]
