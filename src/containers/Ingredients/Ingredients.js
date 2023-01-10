import React from "react";
import { useSelector } from "react-redux";


const Ingredients = () => {
    const ingredients = useSelector(state => state.ingredients.ingredients)
    return (
        <div>
            {Object.keys(ingredients).map((key) => {
                return <div key={key}>
                        <p>Name: {ingredients[key].name}</p>
                        <p>Price {ingredients[key].price}</p>
                        <p>{JSON.stringify(ingredients[key].style)}</p>
                        <br/>
                    </div>
            })}
        </div>
    )
}

export default Ingredients