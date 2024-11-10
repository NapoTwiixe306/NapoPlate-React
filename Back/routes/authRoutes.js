const express = require('express');
const { register, login, getUserInfo } = require('../controllers/authController');

const router = express.Router();

// Route pour l'inscription
router.post('/register', register);

// Route pour la connexion
router.post('/login', login);

// Route pour récupérer les informations de l'utilisateur connecté
router.get('/user', getUserInfo);

module.exports = router;
