import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './RecipeFilter.css'

export default function RecipeFilter() {
    const [filteredRecipes, setFilteredRecipes] = useState([])

    let params = useParams();
   
    const APP_ID = "0575c327"
    const APP_KEY = "1926c9dabf62bbce46d00d37b942916d"
    const API_URL = `https://api.edamam.com/search?q=${params.cuisinetype}&app_id=${APP_ID}&app_key=${APP_KEY}&dishType=${params.dishtype}&from=0&to=12`;

    useEffect( () =>{
        getQuery();
    },[])
     

    const getQuery = async() => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setFilteredRecipes(data.hits)
        console.log(data.hits)
    }
    const extractIdFromUri = (uri) => {
        return uri.split('#recipe_').pop()
    }
    return (
        <div className='filtered__recipes'>
            {filteredRecipes.map((recipe) => (
                <Link to={`/recipe/${extractIdFromUri(recipe.recipe.uri)}`} className="filtered__recipes-item">
                    <img src={recipe.recipe.image}/>
                    <p>{recipe.recipe.label}</p>
                </Link>
            ))}
        </div>
    )
}
