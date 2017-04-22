import React from 'react';
import Home from './Home';
import ProductsPage from './ProductsPage';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const App = ({ children, products, user }) => (

  <div className = 'container'>
    <h3>Best / Worst Products</h3>
    <Link to='/'>Home</Link> { '|' } {' '}
    <Link to='/products'>Products ({ products.length })</Link>
    {' | '}

    <Link to='/login'>Log In</Link>
    {' | '} { user ? `Welcome ${ user.name }` : null }
  { children }
  </div>
  )

const mapStateToProps = (state) => (
  {
    products: state.products,
    user: state.auth.user
  }
)
export default connect(mapStateToProps)(App);
