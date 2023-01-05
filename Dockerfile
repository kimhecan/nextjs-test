FROM node:16.16.0-alpine 

WORKDIR /next-example

COPY . ./

EXPOSE 80

CMD ["npm", "run", "start"]
