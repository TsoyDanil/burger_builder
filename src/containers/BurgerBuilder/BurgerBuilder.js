import React from 'react';
import { useState } from 'react';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  })
  const [totalPrice, setTotalPrice] = useState(200)

  const INGREDIENT_PRICES = {
    salad: 50,
    bacon: 300,
    cheese: 200,
    meat: 500
  }

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type]
    const updateCount = oldCount + 1
    const updatedIngredients = {...ingredients}
    updatedIngredients[type] = updateCount

    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = totalPrice + priceAddition

    setIngredients(updatedIngredients)
    setTotalPrice(newPrice)
  }

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type]
    if (oldCount <= 0) return

    const updateCount = oldCount - 1
    const updatedIngredients = {...ingredients}
    updatedIngredients[type] = updateCount

    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = totalPrice - priceAddition

    setIngredients(updatedIngredients)
    setTotalPrice(newPrice)
  }

  const disabledInfo = {...ingredients}

  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls 
        ingredients={ingredients}
        price={totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabledInfo={disabledInfo}
      />
    </>
  )
}

export default BurgerBuilder;
