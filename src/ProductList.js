import React from 'react';
import { connect } from 'react-redux';
import { destroyProduct } from './productsReducer';
import AddProduct from './AddProduct';

const ProductListItem = ({ product, destroyProduct }) => (
  <li className = 'list-group-item'>{ product.name }<button className='btn btn-danger pull-right' onClick={ destroyProduct }>Delete</button><br style={{ clear: 'both' }} /></li>

)

const ProductList = ({ products, destroyProduct, postProduct }) => (
    <div>
      <ul className = 'list-group'>
        { products.map( product => {
        return <ProductListItem key={product.id} product = { product } destroyProduct = { () => destroyProduct(product) }
        /> }) }
      </ul>
      <AddProduct />
    </div>
)

const mapStateToProps = ( { products }) => (
  { products }
)

const mapDispatchToProps = ( dispatch ) => (
  {
    destroyProduct: (product) => dispatch(destroyProduct(product))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
