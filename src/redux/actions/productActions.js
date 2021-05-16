import {ActionTypes} from '../constant/action-type';

export const setProducts=(products)=>{

  return {
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
  };
};

export const selectProduct=(product)=>{

  return {
    type:ActionTypes.SELECT_PRODUCTS,
    payload:products,
  };
};
