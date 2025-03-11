# On récupère la version LTS de Node.js
FROM node:lts

# On crée un répertoire pour notre application
WORKDIR /app

# On copie les fichiers package.json et package-lock.json
COPY package*.json ./

# On installe les dépendances
RUN npm install

# On copie le reste des fichiers
COPY . .

# On expose le port 3000
EXPOSE 3000

# On lance l'application
CMD npm run dev