FROM node:bullseye

RUN mkdir -p /home/planthub/node_modules && chown -R node:node /home/planthub
WORKDIR /home/planthub

COPY package.json package-lock.json ./

USER node


# not sure about this line
COPY --chown=node:node . .

RUN npm install 


EXPOSE 3000

CMD ["npm", "start"]
