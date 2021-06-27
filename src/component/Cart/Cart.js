import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import {useState, useContext} from 'react'
import CartContext from '../../store/cart-context'


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce( (curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const ItemRender = DUMMY_MEALS.map((item) =>
        <li key={item.id}>{item.name}</li>
    )

    return (
        <Modal >
            <ul className={classes['cart-items']}>
                {ItemRender}
            </ul>

            <div className={classes.total}>
                <span>
                    Total Amout: {numberOfCartItems}
                </span>
                <span>
                    Expense: {cartCtx.totalAmount}
                </span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCartDisplay}>
                    Close
                </button>
                <button className={classes['button--alt']}>
                    Order
                </button>
            </div>
        </Modal>
    )
}

export default Cart