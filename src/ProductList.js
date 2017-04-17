import React from 'react';
import { connect } from 'react-redux';
import { destroyProduct, postProduct } from './productsReducer';


const ProductListItem = ({ product, destroyProduct }) => (
  <li className = 'list-group-item'>{ product.name }<button className='btn btn-danger pull-right' onClick={ destroyProduct }>Delete</button><br style={{ clear: 'both' }} /></li>

)

class AddProduct extends React.Component {
  constructor( {postProduct}){
    super();
    this.state = { name:'' }
    this.handleInput = this.handleInput.bind(this);
    this.onSubmitProduct = this.onSubmitProduct.bind(this);
  }

  handleInput(e){
    this.setState({ name: e.target.value})
  }

  onSubmitProduct(e){
    e.preventDefault()
    postProduct(this.state)
    this.setState({ name: '' });
  }

  render(){

    return(
      <form className = 'form-group' onSubmit={ this.onSubmitProduct }>
        <input className='form-control' value={this.state.name} onChange={ this.handleInput }></input><br/>
        <button className='btn btn-primary pull-right'>Add Product</button>
      </form>
    )
  }

}

const ProductList = ({ products, destroyProduct, postProduct }) => (
  <div>
  <ul className = 'list-group'>
    { products.map( product => {
     return <ProductListItem key={product.id} product = { product } destroyProduct = { () => destroyProduct(product) }
    /> }) }
  </ul>

  <AddProduct postProduct = { () => postProduct(product)}/>

  </div>
)

const mapStateToProps = ( { products }) => (
  { products }
)

const mapDispatchToProps = ( dispatch ) => (
  {
    destroyProduct: (product) => dispatch(destroyProduct(product)),
    postProduct: (product) => dispatch(postProduct(product))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
