import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import ProductsPage from './ProductsPage'
import Home from './Home';
import App from './App';
import LoginPage from './LoginPage';

const root = document.getElementById('app');

const route = (
  <Provider store = { store } >
    <Router history = { hashHistory }>
      <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='products' component={ ProductsPage }/>
      <Route path='login' component={LoginPage} />
      </Route>
    </Router>
  </Provider>
)

render(route, root);
