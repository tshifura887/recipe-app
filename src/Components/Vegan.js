import './Vegan.css'
import React, { useRef } from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import nextId from "react-id-generator";

export default function Vegan({query, name}) {

    const [vegan, setVegan] = useState([]);

    const APP_ID = "0575c327"
    const APP_KEY = "1926c9dabf62bbce46d00d37b942916d"
    const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=4`;

    useEffect( () =>{
        getRecipes();
    },[])


    const getRecipes = async() => {
        const response = await fetch(API_URL)
        const data = await response.json();
        setVegan(data.hits)
    }
    const extractIdFromUri = (uri) => {
        return uri.split('#recipe_').pop()
    }

    return (
        <div className="content__wrapper">
            <div className='header'>
                <p>OUR {name} PICKS</p>
                <Link className='header-view' to={`meal/${query}`}>View All</Link>
            </div>
            <div className="recipes">
                {vegan.map((recipe) => (
                    <div className="recipes-item">
                        <Link className='item' to={`/recipe/${extractIdFromUri(recipe.recipe.uri)}`}>
                            <img src={recipe.recipe.image}/>
                            <h4>{recipe.recipe.label}</h4>  
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
