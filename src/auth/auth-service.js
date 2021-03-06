const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config');

const userTable = 'dnd_users';

const AuthService = {
  getUserByUserName(db, userName) { 
    return db(userTable)
      .where({ userName })
      .first();
  },
  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash);
  },
  createJWT(subject, payload) {
    return jwt.sign(payload, config.JWT_SECRET, {
      subject,
      algorithm: 'HS256'
    });
  },
  verifyJWT(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256']
    });
  }
};

module.exports = AuthService;