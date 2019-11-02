import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart-actions';

// const initialState = 0;

const initialState = {
  cartItemCount: 0,
  total:0,
  items: [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(state.items)
      return {
        ...state,
        cartItemCount: state.cartItemCount+1,
        total: state.total+action.product.price,
        items: [...state.items , action.product]
      }
    }
    case REMOVE_FROM_CART: {
      let cartItemCount = state - 1;
      if (cartItemCount < 0) cartItemCount = 0;
      return cartItemCount;
    }
    default:
      return state;
  }
}
