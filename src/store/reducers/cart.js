import update from 'immutability-helper'

import * as types from '../actions'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return update(state, {
        items: { $push: [action.payload] }
      })
    case types.REMOVE_FROM_CART:
      const item = state.items.find(item => item.id === action.payload)
      const index = state.items.indexOf(item)
      return update(state, {
        items: { $splice: [[index, 1]] }
      })
    default:
      return state
  }
}