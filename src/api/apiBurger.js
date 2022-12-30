import {burgerInstance} from "./instances";

class ApiBurger {
    getOrders = async () => {
        try {
            const response = await burgerInstance.get('/orders.json')
            return response?.data
        } catch(err) {
            console.log('API BURGER ERROR **** ', err)
        }
    } 
    createOrder = async (order) => {
        try {
            await burgerInstance.post('/orders.json', order)
        } catch (err) {
            console.log(err)
        }
    }
    getIngredients = async() => {
        try {
            const response = await burgerInstance.get('/ingredients.json')
            return response?.data
        } catch (err) {
            console.log(err)
        } 
    }
}

export const apiBurger = new ApiBurger()