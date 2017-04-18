import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postProduct } from './productsReducer';

class AddProduct extends React.Component {
  constructor(){
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
    this.props.postProduct(this.state)
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

const mapDispatchToProps = (dispatch) => {
  return {
    postProduct: (product) => dispatch(postProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(AddProduct);
