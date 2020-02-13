import CartActionType from './cart.types';
import CartActionTypes from './cart.types';


export const toggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type : CartActionTypes.ADD_ITEM,
    payload : item
});

export const removeItem = item => ({
    type: CartActionType.REMOVE_ITEM,
    payload : item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})