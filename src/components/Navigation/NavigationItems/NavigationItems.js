import React from "react";
import './NavigationItems.css'
import {NavLink} from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem to={'/'} end>Burger Builder</NavigationItem>
            <NavigationItem to={'/orders'} end>Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems