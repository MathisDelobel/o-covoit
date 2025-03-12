# Projet O'Covoit 🚗

Bienvenue dans le projet **O'Covoit** — une application en développement de covoiturage construite avec une architecture microservices 

## 🏗️ Architecture

L'application est divisée en plusieurs micro-services distincts :

- **API Users (api-users)** : Gestion des utilisateurs (création, mise à jour, suppression etc.).
- **Authentication Service (auth-service)** : Service d'authentification pour gérer les tokens JWT.
- **Main** : Point d'entrée principal de l'application, qui orchestre la communication entre les microservices.

Chaque service est conteneurisé avec Docker et orchestré avec Docker Compose.

## ⚙️ Installation et lancement

### Prérequis
- Docker
- Docker Compose

### Configuration
1. **Variables d'environnement** :
   Copiez les fichiers `.env.example` dans chaque service et complétez les variables nécessaires

2. **Lancement des conteneurs** :

```bash
docker-compose up -d --build
```

L’application sera accessible sur : `http://localhost:3000`
️

