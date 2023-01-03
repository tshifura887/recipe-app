import React from 'react'
import './HomePageHero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePageHero() {
    return (
        <div className='home__page-hero'>
            <Slider
                dots={true}
                infinite={true}
                autoplay={true}
                autoplaySpeed={2000}
                className="slider"
            >
                <div className='home__page-hero_image one'>
                    <h1>Find your best recipe</h1>
                </div>
                <div className='home__page-hero_image two'>
                    <h1>Tones of family recipes</h1>
                </div>
                <div className='home__page-hero_image three'>
                    <h1>This is your daily cooking app</h1>
                </div>
            </Slider>
        </div>
    )
}
