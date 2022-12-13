import React, {useEffect, useState} from 'react'
import {apiBurger} from "../../api/apiBurger";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/Order/OrderItem/OrderItem";


const Orders = () => {
    const [orders, setOrders] = useState({})
    const [loading, setLoading] = useState(false);
    
    const getOrders = async () => {
        setLoading(true)
        try {
            const response = await apiBurger.getOrders()
            setOrders(response)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getOrders()
    }, [])
    return (
        <>
            {loading 
                ? <Spinner /> 
                : 
                <div>
                    {Object.keys(orders).map((key, i) => {
                        return <OrderItem 
                            key={key}
                            ingredients={orders[key].ingredients}
                            price={orders[key].price}
                        />
                    })}
                </div>
            }
        </>
    )
}

export default Orders