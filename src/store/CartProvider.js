import CartContext from './cart-context'
import {useReducer} from 'react'

// const defaultCartState = {
//     items: [],
//     totalAmount: 0,
// }
//
// const cartReducer => (state, action) {
//     if(type === 'ADD'){
//         const updatedItems = state.items.concat(action.item);
//         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//         return({
//                 items: updatedItems,
//                 totalAmount: updatedTotalAmount,
//             }
//         )
//     }
//
//     return defaultCartState;
// }
//
//
//
// const CartProvider = props => {
//     const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
//
//     const addItemToCartHandler = item => {
//         dispatchCartAction({type: 'ADD', item: item})
//     };
//     const removeItemFormCartHandler = id => {
//         dispatchCartAction(type: 'REMOVE', id: id)
//     };
//
//     const cartContext = {
//         items: cartState.items,
//         totalAmount: cartState.amount,
//         addItem: addItemToCartHandler,
//         removeItem: removeItemFormCartHandler,
//     }
//
//     return (
//         <CartContext.Provider value={cartContext}>
//             {props.children}
//         </CartContext.Provider>
//     )
// }
//
// export default CartProvider

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedCart = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return (
            {
                items: updatedCart,
                totalAmount: updatedTotalAmount,
            }
        )
    }
    return defaultCartState;
}



const CartProvider = props => {
    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = (item) => {
        dispatchCartAction(
            {type: 'ADD', item: item}
        )
    }
    const removeItemHandler = (id) => {
        dispatchCartAction(
            {type: 'REMOVE', id: id}
        )
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;