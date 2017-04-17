const db = require('./db');

const User = db.define('user',{
  name: {
    type: db.Sequelize.STRING
  },
  password: db.Sequelize.STRING
})

module.exports = User;
