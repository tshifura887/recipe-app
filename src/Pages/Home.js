import React, { useEffect } from 'react'
import HomePageHero from '../Components/HomePageHero'
import HomePageRecipes from '../Components/HomePageRecipes'
import Form from '../Components/Form'
export default function Home() {

    return (
        <div>
            <HomePageHero/>
            <Form/>
            <HomePageRecipes/>
        </div>
    )
}
