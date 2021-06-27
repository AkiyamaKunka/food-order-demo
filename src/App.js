import logo from './logo.svg';
import './App.css';

import Meal from './component/Meal/Meal'
import Header from './component/Layout/Header'
import Cart from './component/Cart/Cart'
import CartProvider from '../src/store/CartProvider'
import {useState} from 'react'
function App() {

    const [cartIsShown, setCartIsShown] = useState(false);
    const CartDisplayHandler = () => {
        setCartIsShown( prevState => !prevState);
        console.log('reverse!')
        console.log(cartIsShown)
    }

    return (
        <CartProvider>
            <Header onCartDisplay={CartDisplayHandler}/>
            <main>
                <Meal/>
                {cartIsShown && <Cart onCartDisplay={CartDisplayHandler}/>}
            </main>
        </CartProvider>
    );
}

export default App;