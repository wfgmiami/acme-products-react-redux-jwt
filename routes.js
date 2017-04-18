const router = require('express').Router();
const Product = require('./db').models.Product
const User = require('./db').models.User;
const jwt = require('jwt-simple');
const secret = process.env.SECRET || 'foo';

router.get('/products',(req,res,next)=>{
  Product.findAll({ order: 'name' })
  .then( products => res.send(products))
  .catch(next);
})

router.delete('/products/:id', (req,res,next)=>{
  Product.destroy({ where: { id: req.params.id }})
  .then( () => res.sendStatus(204))
  .catch(next)
})

router.post('/products',(req,res,next)=>{

  Product.create(req.body)
  .then(()=> res.redirect('/api/products'))
  .catch(next);
})

router.post('/session', (req,res,next)=>{

  User.findOne({
    where: { name: req.body.name, password: req.body.password }
  })
  .then( user => {
    if(user){
      const token = jwt.encode({ id: user.id },secret);
      return res.send(token)
    }
    return res.sendStatus(401);
  })
  .catch(next);
})

router.get('/session/:token', (req,res,next)=>{
  try{
    const token = jwt.decode(req.params.token, secret)
    User.findById(token.id)
    .then( user => {
      if(!user){
        return res.sendStatus(401)
      }
      res.send(user);
    })
  }catch(e){
    res.sendStatus(500)
  }
})
module.exports = router;
