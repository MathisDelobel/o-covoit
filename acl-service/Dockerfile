# Exemple de fichier Dockerfile...

# On récupère la version LTS de Node.js
FROM node:lts

# On crée un répertoire pour notre application
WORKDIR /app

# On copie les fichiers package.json et package-lock.json
COPY package*.json ./

# On installe les dépendances de notre application
RUN npm install

# On copie le reste des fichiers de notre application
COPY . .

# On expose le port 3000 de notre conteneur
EXPOSE 3000

# On démarre notre application au lancement du conteneur
CMD npm run dev