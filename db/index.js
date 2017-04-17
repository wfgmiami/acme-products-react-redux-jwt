const conn = require('./db');

const Product = require('./Product');
const User = require('./User');

const sync = () =>{
  return conn.sync({ force: true })
}

const names = ['Larry', 'Curly','Moe'];
const products = ['foo', 'bar', 'bazz'];

const seed = () =>{
  return sync()
    .then( () => Promise.all(names.map((name, idx) => User.create({ name, password: products[idx] }))))
    .then( () => Promise.all(products.map(name => Product.create( { name }))))
}

User.belongsTo(Product, { as: 'bestProduct' })
User.belongsTo(Product, { as: 'worstProduct' })

module.exports = {
  seed,
  models: {
    Product,
    User
  }
}
