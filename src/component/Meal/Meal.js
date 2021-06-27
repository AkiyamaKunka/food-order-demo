import MealItem from './MealItem/MealItem'
import React from 'react'
import Card from '../UI/Card'
import classes from '../Meal/MealItem/MealItem.module.css'
import MealSummary from './MealSummary/MealSummary'
import AvailableMeals from './AvailableMeals/AvailableMeals'


const Meal = () => {
    return(
        <>
            <MealSummary/>
            <AvailableMeals/>
        </>
    )
}
export default Meal;