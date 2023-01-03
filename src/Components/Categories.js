import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

export default function Categories() {
  return (
    <div className='recipe'>
        <div className='recipe__category'>
           <Link className='recipe__category-item' to="meal/breakfast">Breakfast</Link>
        </div>
        <div className='recipe__category'>
            <Link className='recipe__category-item' to="meal/lunch">Lunch</Link>
        </div>
        <div className='recipe__category'>
            <Link className='recipe__category-item' to="meal/dinner">Dinner</Link>
        </div>
        <div className='recipe__category'>
            <Link className='recipe__category-item' to="meal/snack">Snack</Link>
        </div>
        <div className='recipe__category'>
            <Link className='recipe__category-item' to="meal/teatime">Teatime</Link>
        </div>
    </div>
  )
}
