import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Searched.css'

export default function Searched() {
    const [searchedRecipe, setSearchedRecipe] = useState([]);
    let params = useParams();

    const APP_ID = "0575c327"
    const APP_KEY = "1926c9dabf62bbce46d00d37b942916d"
    const API_URL = `https://api.edamam.com/search?q=${params.search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`;

    useEffect( () =>{
        getSearched();
    },[])

    const getSearched = async() => {
        const response = await fetch(API_URL)
        const data = await response.json();
        setSearchedRecipe(data.hits)
    }
    const extractIdFromUri = (uri) => {
        return uri.split('#recipe_').pop()
    }
    return (
        <div className='searched'>
            {searchedRecipe.map((recipe) =>(
                <Link className='searched-recipe' to={`/recipe/${extractIdFromUri(recipe.recipe.uri)}`}>
                    <img src={recipe.recipe.image}/>
                    <h4>{recipe.recipe.label}</h4>
                </Link>
            ))}
        </div>
    )
}
