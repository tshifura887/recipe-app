import React from 'react'
import Vegan from './Vegan'

export default function HomePageRecipes() {
    return (
        <div>
            <Vegan query={"vegan"} name={"VEGAN"}/>
            <Vegan query={"drinks"} name={"DRINKS"}/>
        </div>
    )
}
