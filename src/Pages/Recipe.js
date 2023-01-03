import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Recipe.css'

export default function Recipe() {
    let params = useParams();

    const [recipe, setRecipe] = useState();

    const APP_ID = "0575c327"
    const APP_KEY = "1926c9dabf62bbce46d00d37b942916d"
    const API_URL = `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${params.name}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect( () =>{
        getRecipes();
    },[])


    const getRecipes = async() => {
        const response = await fetch(API_URL)
        const data = await response.json();
        setRecipe(data);
        console.log(data)
    }
    return (
        <div className='recipe-info'>
            { recipe?.map((r) => (
                <div className='recipe-info__item'>
                    <div className='recipe-info__item-left'>
                        <img src={r.image}/>
                    </div>
                    <div className='recipe-info__item-right'>
                        <h1>{r.label}</h1>
                        <div className='info'>
                            <p>Prep Time: {r.totalTime} mins</p>
                            |
                            <p>Cuisine Type: {r.cuisineType}</p>
                        </div>

                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <ul>
                                {r.ingredients.map((ingredient) =>(
                                    <li>{ingredient.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
