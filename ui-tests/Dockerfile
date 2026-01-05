FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /tests
COPY package.json package-lock.json* ./
RUN npm install

COPY . .
CMD ["npm", "test"]
