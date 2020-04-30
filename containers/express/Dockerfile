FROM node:8

WORKDIR /app

COPY ./tsconfig.json .
COPY ./package.json .
RUN npm install --quiet

COPY ./src ./src
RUN npm run compile

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]