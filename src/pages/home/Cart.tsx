import { useReducer } from "react";

export type CartItem = {id: number, name: string, price: number};
export type CartState = {cartItems: CartItem[]};

type Action = 
    | {type: 'ADD_ITEM', payload: CartItem}
    | {type: 'REMOVE_ITEM', payload: number}
    | {type: 'CLEAR_CART'};

const initialState: CartState = {cartItems: []};

export function CartReducer(state: CartState, action: Action): CartState {
    switch(action.type) {
        case 'ADD_ITEM':
            return {...state, cartItems: [...state.cartItems, action.payload]};
        case 'REMOVE_ITEM':
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)};
        case 'CLEAR_CART':
            return {...state, cartItems: []};
        default:
            return state;
    }
}

export function useCartReducer() {
    return useReducer(CartReducer, initialState);
}