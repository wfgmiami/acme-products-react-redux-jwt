const conn = require('./db');

const Product = conn.define('product',{
  name: {
    type: conn.Sequelize.STRING
  }
})

module.exports = Product;
