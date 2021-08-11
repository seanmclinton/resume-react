# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /resume-react

EXPOSE 3000

COPY "package.json" .

RUN npm install


COPY . .

CMD ["npm", "start"]