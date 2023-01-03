import React from 'react'
import {Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Recipe from './Recipe';
import Searched from './Searched';
import Category from './Category';
import RecipeFilter from '../Components/RecipeFilter';
export default function Pages() {
    const location = useLocation();

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={ <Home/>} />
                <Route path="/recipe/:name" element={<Recipe />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/meal/:name" element={<Category />} />
                <Route path="/recipe/:cuisinetype/:dishtype" element={<RecipeFilter/>}/>
            </Routes>
        </>
    );
}
