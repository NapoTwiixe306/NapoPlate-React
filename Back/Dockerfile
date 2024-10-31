# Back/Dockerfile.dev
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Exposer le port du serveur backend
EXPOSE 5000
CMD ["npm", "start"] 
