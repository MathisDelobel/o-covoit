# Backend Covoiturage - Microservices

Application en développement

## Description

Ce projet est un backend pour une application de covoiturage imaginaire, construite en utilisant une architecture microservices. Chaque service est isolé, ce qui permet une grande modularité et facilite la gestion de l'évolutivité du projet.

Le backend est développé avec **Node.js** et utilise **Docker** pour containeriser les différents services. L'architecture microservices permet de gérer les différents aspects de l'application, comme l'authentification, l'autorisation et la gestion des utilisateurs.

## Installer le projet

### 1. Cloner le repository
```bash
git clone https://github.com/MathisDelobel/o-covoit
cd o-covoit
```

### 2. Créer les fichiers .env et les configuer

### 3. Consruire et démarrer les services
```bash
docker compose compose up -d --build
```
