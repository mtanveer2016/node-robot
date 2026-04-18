FROM node:20-slim
WORKDIR /app
EXPOSE 3002 

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["node", "index.js"]