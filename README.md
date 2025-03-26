# Backend Covoiturage - Microservices

Application en développement

## Description

Ce projet est une application de covoiturage imaginaire, construite en utilisant une architecture microservices. 

Le backend est développé avec **Node.js** et utilise **Docker** pour containeriser les différents services. L'architecture microservices permet de gérer les différents aspects de l'application, comme l'authentification, l'autorisation et la gestion des utilisateurs.

Le frontend est containerisé dans le service main et utilise **Ejs** et **Bulma.css**.

## Installer le projet

### 1. Cloner le repository
```bash
git clone https://github.com/MathisDelobel/o-covoit
cd o-covoit
```

### 2. Créer les fichiers .env et les configuer

### 3. Consruire et démarrer les services
```bash
docker compose up -d --build
```
