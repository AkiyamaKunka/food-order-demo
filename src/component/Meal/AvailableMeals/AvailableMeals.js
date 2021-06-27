import classes from './AvailableMeals.module.css'
import MealItem from '../MealItem/MealItem'
import Card from '../../UI/Card'
import {useState, useEffect} from 'react'

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


const AvailableMeals = () => {

    const [mealList, setMealList] = useState([...DUMMY_MEALS]);
    const[mealAmount, setMealAmount] = useState(new Map());




    const MealListRender = mealList.map((item) =>
        <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            amount={mealAmount.get(item.id)}

        />)

    return (
            <section className={classes.meals}>
                <Card>
                <ul>
                    {MealListRender}
                </ul>
                </Card>
            </section>
    )
}
export default AvailableMeals