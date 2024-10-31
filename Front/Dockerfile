# Front/Dockerfile.dev
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Exposer le port par défaut pour Vite
EXPOSE 5173
CMD ["npm", "run", "dev"]
