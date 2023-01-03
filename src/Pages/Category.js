import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Category.css'

export default function Category() {
    const [category, setCategory] = useState([]);
    let params = useParams();
    const APP_ID = "0575c327"
    const APP_KEY = "1926c9dabf62bbce46d00d37b942916d"
    const API_URL = `https://api.edamam.com/search?q=${params.name}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`;

    useEffect( () =>{
        getCategory();
    },[])

    const getCategory = async() => {
        const response = await fetch(API_URL)
        const data = await response.json();
        setCategory(data.hits)
    }
    const extractIdFromUri = (uri) => {
        return uri.split('#recipe_').pop()
    }
    return (
        <div className='categories__recipes'>
            {category.map((recipe) => (
                <Link className='categories__recipes-item' to={`/recipe/${extractIdFromUri(recipe.recipe.uri)}`}>
                    <img src={recipe.recipe.image}/>
                    <p>{recipe.recipe.label}</p>
                </Link>
            ))}
        </div>
    )
}
