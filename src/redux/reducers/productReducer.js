import {ActionTypes} from '../constant/action-type';
const initialState={

  products:[{
    id:1,
    title:'pk'
  }]
}
export const productReducer=(state=initialState,{type,payload})=>{
switch (type) {
  case ActionTypes.SET_PRODUCTS:

  return state;
  default:
    return state;
}

}
