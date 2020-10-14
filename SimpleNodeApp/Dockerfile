FROM node:alpine

WORKDIR /usr/app
#  From this point onward the following instruction
#  will be executed in this /usr/app working directory

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm", "start" ]