import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import { getIngredients, updateIngredient } from "../../store/ingredients.slice";


const Ingredients = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(state => state.ingredients.ingredients)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [currentKey, setCurrentKey] = useState('')
    const [currentIngredient, setCurrentIngredient] = useState({})
    const showModal = (ingredient, key) => {
        setCurrentIngredient(ingredient)
        setCurrentKey(key)
        setShowUpdateModal(true)
    }
    const closeModal = () => {
        setShowUpdateModal(false)
    }

    const inputHandler = (e) => {
        setCurrentIngredient(prevSate => {
            return {...prevSate, [e.target.name]: e.target.value}
        })
    }

    const createForm = (obj, arr=[]) => {
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === 'object'){
                createForm(obj[key], arr)
            } else{
                arr.push(<div key={obj[key]}><input name={key} value={obj[key]} onChange={(e)=>{inputHandler(e)}}/></div>)
            }
        })
        return arr
    }

    const submitUpdate = async (event) => {
        await event.preventDefault()
        await dispatch(updateIngredient({id: currentIngredient, ingredient: currentIngredient}))
        setShowUpdateModal(false)
    }

    return (
        <div>
            <Modal
                show = {showUpdateModal}
                closed = {closeModal}
            >
                <form onSubmit={submitUpdate}>
                    <div>
                        {createForm(currentIngredient)}
                        <Button
                            btnType = 'Success'
                        >Submit changes</Button>
                    </div>
                </form>
            </Modal>
            {Object.keys(ingredients).map((key) => {
                return <div key={key}
                            style={{border: '1px solid black', margin: '20px', padding: '20px'}}
                        >
                        <p>Name: {ingredients[key].name}</p>
                        <p>Price {ingredients[key].price}</p>
                        <Button
                            clicked = {()=>showModal(ingredients[key], key)}
                            btnType = {'Success'}
                        >Update</Button>
                        {/* <p>{JSON.stringify(ingredients[key].style)}</p>
                        <br/> */}
                    </div>
            })}
        </div>
    )
}

export default Ingredients