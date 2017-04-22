import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer,{ loadProducts } from './productsReducer';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import authReducer, { me, logout } from './authReducer';

const combinedReducer = combineReducers({
    products: productsReducer,
    auth: authReducer
})

const store = createStore(combinedReducer,applyMiddleware(thunk));
store.dispatch(loadProducts());
//store.dispatch(logout());

export default store;

