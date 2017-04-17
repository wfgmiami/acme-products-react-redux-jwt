import {DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } from './constants';

export const actionDelete = () => {
  return {
    type: DELETE_PRODUCT
  }
}

export const actionAdd = (product) => {
  return {
    type: ADD_PRODUCT,
    product: product
  }
}


