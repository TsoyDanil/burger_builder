import React from "react";
import { useRef } from "react";
import { NavLink, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { parseSearch } from "../../helper/parseSearch";


const Checkout = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    
    const parsed = parseSearch(searchParams)
    const ingredients = useRef(parsed)
    const checkoutCancelledHandler = () => {
        navigate(-1)
    }
    const checkoutContinuedHandler = () => {
        navigate('contact-data', {state: {ingredients: ingredients.current}})
    }

    return (
        <>
            <CheckoutSummary 
                ingredients={ingredients.current}
                checkoutCancelled={checkoutCancelledHandler}
                checkoutContinued={checkoutContinuedHandler}
            />
            <Outlet />
        </>
    )
}

export default Checkout