import React from "react";
import './OrderItem.css'

const OrderItem = (props) => {
    const ingredientOutput = Object.keys(props.ingredients).map((key, i) => {
        return <li className={'OrderItem__li'} key={i}>{key}: {props.ingredients[key]}</li>
    })
    
    return (
        <div className={'OrderItem'}>
            <ul><strong>Ingredients:</strong> {ingredientOutput}</ul>
            <p>Price: <strong>{props.price} KZT</strong></p>
        </div>
    )
}

export default OrderItem