# 🚀 Bienvenue sur le Boilerplate React + Vite !

Ce projet est une base prête à l’emploi pour démarrer vos applications **front** et **back** avec les dernières technologies et une structure déjà intégrée. Grâce à une configuration **Docker** simple, vous pourrez lancer vos applications rapidement et efficacement ! 🎉

---

## 🛠️ Stack Utilisée

### Frontend
- **React** avec **Vite** pour un développement ultra-rapide.
- **TailwindCSS** pour un style moderne et facile à personnaliser.

### Backend
- **Node.js** (prochainement migré vers **TypeScript** pour plus de robustesse et de maintenabilité).

### Base de Données
- **init.sql** pour l’initialisation de votre base de données.

---

## 🚀 Guide d'Installation

### 1. Préparation du Frontend

Commencez par configurer le frontend :
```sh
cd Front
npm install
```

### 2. Préparation du Backend

Commencez par configurer le frontend :
```sh
cd Back
npm install
```

### 3. Configuration du fhcier .env

A la racine du projet, créer un fichier `.env£
```sh
touch .env
```
Ce fichier doit contenir les variables présentes dans le `.env.exemple` Ne modifiez pas la valeur de `DB_HOST`, qui doit rester définie sur `DB_HOST=db`.

### 4. Lancement du Projet avec Docker

#### Sur macos et linux
Dans votre terminal exécutez les commandes suivantes

```sh
sudo su
docker-compose up
```

#### Sur windows
```sh
docker-compose up
```
> 💡 **Note** : Assurez-vous que Docker est installé sur votre machine avant de lancer ces commandes !

## 🤔 Pourquoi Utiliser ce Boilerplate ?

Ce boilerplate est conçu pour :

- 🚀 **Accélérer votre développement** sans avoir à configurer votre environnement à chaque projet.
- 📦 Vous fournir une **structure fiable, performante et moderne**.
- 🌟 Vous permettre de vous concentrer sur l’essentiel : **créer des applications exceptionnelles** !