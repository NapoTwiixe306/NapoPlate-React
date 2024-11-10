const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, addUser } = require('../models/User'); // Assure-toi que ces fonctions existent et fonctionnent correctement

// Fonction d'inscription
exports.register = (req, res) => {
  const { email, password } = req.body;

  // Vérifie si l'email existe déjà dans la base de données
  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).send('Erreur lors de la vérification de l\'email.');
    if (results.length > 0) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Hasher le mot de passe
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).send('Erreur lors du hashage du mot de passe.');

      // Ajouter l'utilisateur à la base de données
      addUser(email, hashedPassword, (err) => {
        if (err) return res.status(500).send('Erreur lors de l\'inscription de l\'utilisateur.');
        res.status(201).json({ message: 'Utilisateur créé avec succès.' });
      });
    });
  });
};

// Fonction de connexion
exports.login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).send('Erreur lors de la récupération des utilisateurs.');
    if (results.length === 0) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send('Erreur lors de la comparaison des mots de passe.');
      if (!isMatch) {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
      }

      // Vérifie que la variable d'environnement JWT_SECRET est présente
      if (!process.env.JWT_SECRET) {
        return res.status(500).json({ message: 'Clé secrète manquante pour la création du token JWT.' });
      }

      console.log('JWT_SECRET:', process.env.JWT_SECRET);  // Affiche le secret pour vérifier s'il est bien chargé

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Connexion réussie', token });
    });
  });
};

// Fonction de déconnexion
exports.logout = (req, res) => {
  // Ici on n'a pas besoin de logic côté serveur car on supprime juste le token côté client
  res.status(200).json({ message: 'Déconnexion réussie.' });
};
