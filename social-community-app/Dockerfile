FROM node:16

WORKDIR /social-community-app
COPY package.json .
RUN npm install
COPY . . 
CMD npm run start
