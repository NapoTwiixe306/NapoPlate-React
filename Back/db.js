// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db', // ou l'adresse de ton conteneur MySQL
    user: 'julien', // ton nom d'utilisateur
    password: 'Jean-Michelle7845', // ton mot de passe
    database: 'ReactBoilerplate' // nom de ta base de données
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL avec succès.');
});

module.exports = connection;
