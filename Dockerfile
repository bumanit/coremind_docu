FROM node:latest as base
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "serve", "--", "--build", "--port", "80", "--host", "0.0.0.0"]
