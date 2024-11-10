const db = require('../db'); // Importer la connexion à la base de données

// Méthode pour trouver un utilisateur par son email
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';

  db.execute(query, [email], (err, results) => {
    if (err) {
      console.error('Erreur lors de la recherche de l\'utilisateur par email:', err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Méthode pour ajouter un utilisateur
const addUser = (email, hashedPassword, callback) => {
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';

  db.execute(query, [email, hashedPassword], (err) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
      return callback(err);
    }
    callback(null);
  });
};

module.exports = { findUserByEmail, addUser };
