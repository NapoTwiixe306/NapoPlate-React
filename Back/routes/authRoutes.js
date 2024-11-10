const express = require('express');
const { register, login, logout } = require('../controllers/authController');

const router = express.Router();

// Route pour l'inscription
router.post('/register', register);

// Route pour la connexion
router.post('/login', login);

// Route pour la déconnexion
router.post('/logout', logout);

module.exports = router;
