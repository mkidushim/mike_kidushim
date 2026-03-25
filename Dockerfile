FROM node:20-alpine

WORKDIR /app

# Install dependencies first (cached)
COPY site .
RUN npm install

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host"]