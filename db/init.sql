-- Créez la base de données si elle n'existe pas
CREATE DATABASE IF NOT EXISTS ReactBoilerplate;

-- Sélectionnez la base de données à utiliser
USE ReactBoilerplate;

-- Créez la table des utilisateurs si elle n'existe pas
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insérez un utilisateur d'exemple dans la table des utilisateurs
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');

-- Créez la table des portefeuilles si elle n'existe pas
CREATE TABLE IF NOT EXISTS wallets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL UNIQUE
);
