// Back/index.js
const express = require('express');
const connection = require('./db'); // Importer la connexion à la base de données
const app = express();
const PORT = 5000;

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Node.js is running!');
});

// Exemple de route pour récupérer les utilisateurs
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM User', (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des utilisateurs.');
        }
        res.json(results); // Envoie les résultats au format JSON
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
