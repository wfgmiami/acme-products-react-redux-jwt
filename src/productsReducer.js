import { LOAD_PRODUCTS_SUCCESS, DESTROY_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, UNSET_FAVORITE_PRODUCT } from './constants';
import axios from 'axios';


const productsReducer = (state=[], action) => {

  switch(action.type){
    case LOAD_PRODUCTS_SUCCESS:
      state = action.products;
      break;
    case DESTROY_PRODUCT_SUCCESS:
      state = state.filter( product => product.id !== action.product.id)
      break;
    case POST_PRODUCT_SUCCESS:
      state = state.push(action.product).sort();
      break;
    default:
      break;
  }
  return state;
}

const loadProductSuccess = (products) => ({
    type: LOAD_PRODUCTS_SUCCESS,
    products: products
})

const destroyProductSuccess = (product) => ({
  type: DESTROY_PRODUCT_SUCCESS,
  product: product
})

const postProductSuccess = (product) => ({
  type: POST_PRODUCT_SUCCESS,
  product: product
})

const loadProducts = () => {
  return (dispatch) =>{

    //return axios.get('/api/products') <--- no need for return Eric!
    axios.get('/api/products')
    .then( response => dispatch(loadProductSuccess(response.data)))
  }
}


const destroyProduct = (product) => {
  return (dispatch) => {
    //return axios.delete(`/api/products/${product.id}`)
    axios.delete(`/api/products/${product.id}`)
    .then( () => dispatch(destroyProductSuccess(product)))
  }
}

const postProduct = (product) => {
  console.log(product)
  return (dispatch) => {
    axios.post('/api/products', product)
    .then( () => dispatch(postProductSuccess(product)))
  }
}

export { loadProducts, destroyProduct, postProduct }
export default productsReducer;
