import classes from './MealItemForm.module.css';
import Input from '../../UI/Input'
import {useRef, useState} from 'react'

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    // because the ref will always be a string, not a number
    const inputInfo = {
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }

    const submitHandler = event => {

        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim() === 0
            || enteredAmountNumber < 1
            || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return(
        <form className={classes.form}>
            <Input ref={amountInputRef} lable='Amount' input={inputInfo}/>
            <button onClick={submitHandler}>
                + Add
            </button>
            {!amountIsValid && <p>please enter an amount 1 to 5</p>}
        </form>
    )
}

export default MealItemForm;