import * as types from './index'

export const addItemToCart = item => ({
  type: types.ADD_TO_CART,
  payload: item
})

export const removeItemFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: id
})