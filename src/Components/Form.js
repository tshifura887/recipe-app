import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Form.css'

export default function Form() {
    const [query, setQuery] = useState([]);
    const [cuisineSelect, setCuisineSelect] = useState("");
    const [dishSelect, setDishSelect] = useState("");


    const APP_ID = "0575c327"
    const APP_KEY = "1926c9dabf62bbce46d00d37b942916d"
    const API_URL = `https://api.edamam.com/search?q=${cuisineSelect}&app_id=${APP_ID}&app_key=${APP_KEY}&dishType=${dishSelect}&from=0&to=12`;

    useEffect( () =>{
        getQuery();
    },[])

    const getQuery = async() => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setQuery(data.hits)
        console.log(data.hits)
    }
    const cuisineStatusHandler = (e) => {
        setCuisineSelect(e.target.value)
    }
    const dishStatusHandler = (e) => {
        setDishSelect(e.target.value)
    }
    return (
        <div className='form-wrapper'>
            <form className='form'>
                <div className='form-select'>
                    <h4>Cuisine</h4>
                    <select onChange={cuisineStatusHandler}>
                        <option>None Selected</option>
                        <option value="American">American</option>
                        <option value="asian">Asian</option>
                        <option value="british">British</option>
                        <option value="caribian">Caribian</option>
                        <option value="central europe">Central Europe</option>
                        <option value="chinese">Chinese</option>
                        <option value="eastern europe">Eastern Europe</option>
                        <option value="greek">Greek</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                        <option value="korean">Korean</option>
                        <option value="kosher">Kosher</option>
                        <option value="mediterranean">Mediterranean</option>
                        <option value="mexican">Mexican</option>
                        <option value="nordic">Nordic</option>
                        <option value="south american">South American</option>
                        <option value="south east asian">South East Asian</option>
                        <option value="world">World</option>
                    </select>
                </div>
                <hr/>
                <div className='form-select'>
                    <h4>Dish Type</h4>
                    <select onChange={dishStatusHandler}>
                        <option>None Selected</option>
                        <option value="breakfast">Alcohol Cocktail</option>
                        <option value="biscuits and cookies">Buscuits and Cookies</option>
                        <option value="bread">Bread</option>
                        <option value="cereals">Cereals</option>
                        <option value="condiments and sauces">Condiments and Sauses</option>
                        <option value="desserts">Desserts</option>
                        <option value="drinks">Drinks</option>
                        <option value="egg">Egg</option>
                        <option value="ice cream and custard">Ice Cream and Custad</option>
                        <option value="main course">Main Course</option>
                        <option value="pancake">Pancake</option>
                        <option value="pastry">Pastry</option>
                        <option value="pies and tarts">Pies and Tarts</option>
                        <option value="pizza">Pizza</option>
                        <option value="preps">Preps</option>
                        <option value="slad">Salad</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="soup">Soup</option>
                        <option value="special occasions">Special Occasions</option>
                        <option value="starter">Starter</option>
                        <option value="sweets">Sweets</option>
                    </select>
                </div>
                <Link type='submit' to={`recipe/${cuisineSelect}/${dishSelect}`} className="submit-button">
                    search
                </Link>
            </form>
        </div>
    )
}
