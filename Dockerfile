FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /d3-data-analysis
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
CMD ["ng", "serve"]
EXPOSE 4200