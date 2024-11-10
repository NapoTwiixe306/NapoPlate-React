// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importation du module CORS
const authRoutes = require('./routes/authRoutes');

// Charger les variables d'environnement
dotenv.config();

// Créer l'application Express
const app = express();
const PORT = process.env.PORT || 5000;

// Configuration CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Autorise les requêtes provenant de cette origine
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // Autorise l'en-tête Authorization
};



// Appliquer CORS à toutes les requêtes
app.use(cors(corsOptions));

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());

// Route d'exemple
app.get('/', (req, res) => {
  res.send('Backend Node.js is running!');
});

// Utiliser les routes d'authentification
app.use('/api/auth', authRoutes);

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
