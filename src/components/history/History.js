import React, { useState, useEffect } from 'react';
// import data from '../../utils/data';
import yourImage1 from '../../images/first_plant.jpg';
import yourImage2 from '../../images/second_plant.jpg';
import yourImage3 from '../../images/third_plant.jpg';
import yourImage4 from '../../images/fourth_plant.jpg';
import yourImage5 from '../../images/five_plant.png';

import './History.css'; // Create a CSS file for styling

function History() {

    return (
        <div className='container'>
            <div className='history-container'>
                <div className='text-container'>
                    <h1>The Timeless History of Ayurveda</h1>
                    <div className='intro'>
                        <h3>Introduction:</h3>
                        <p>
                            Welcome to our journey through the timeless history of Ayurveda,
                            the ancient system of holistic healing that has captivated hearts
                            and minds for thousands of years. Ayurveda, often referred to as
                            the "Science of Life," is a profound and intricate system of
                            medicine and well-being that traces its origins to the depths of
                            ancient India. Join us as we explore the rich tapestry of Ayurveda's
                            history, evolution, and enduring relevance in the modern world.
                        </p>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={yourImage1} alt='Ayurveda Image' />
                </div>
            </div>
            <div className='history-container'>
                <div className='image-container'>
                    <img src={yourImage2} alt='Ayurveda Image' />
                </div>
                <div className='text-container'>
                    <h1>The Timeless History of Ayurveda</h1>
                    <div className='intro'>
                        <h3>Introduction:</h3>
                        <p>
                            Welcome to our journey through the timeless history of Ayurveda,
                            the ancient system of holistic healing that has captivated hearts
                            and minds for thousands of years. Ayurveda, often referred to as
                            the "Science of Life," is a profound and intricate system of
                            medicine and well-being that traces its origins to the depths of
                            ancient India. Join us as we explore the rich tapestry of Ayurveda's
                            history, evolution, and enduring relevance in the modern world.
                        </p>
                    </div>
                </div>
            </div>
            <div className='history-container'>
                <div className='text-container'>
                    <h1>The Timeless History of Ayurveda</h1>
                    <div className='intro'>
                        <h3>Introduction:</h3>
                        <p>
                            Welcome to our journey through the timeless history of Ayurveda,
                            the ancient system of holistic healing that has captivated hearts
                            and minds for thousands of years. Ayurveda, often referred to as
                            the "Science of Life," is a profound and intricate system of
                            medicine and well-being that traces its origins to the depths of
                            ancient India. Join us as we explore the rich tapestry of Ayurveda's
                            history, evolution, and enduring relevance in the modern world.
                        </p>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={yourImage3} alt='Ayurveda Image' />
                </div>
            </div>
            <div className='history-container'>
                <div className='image-container'>
                    <img src={yourImage4} alt='Ayurveda Image' />
                </div>
                <div className='text-container'>
                    <h1>The Timeless History of Ayurveda</h1>
                    <div className='intro'>
                        <h3>Introduction:</h3>
                        <p>
                            Welcome to our journey through the timeless history of Ayurveda,
                            the ancient system of holistic healing that has captivated hearts
                            and minds for thousands of years. Ayurveda, often referred to as
                            the "Science of Life," is a profound and intricate system of
                            medicine and well-being that traces its origins to the depths of
                            ancient India. Join us as we explore the rich tapestry of Ayurveda's
                            history, evolution, and enduring relevance in the modern world.
                        </p>
                    </div>
                </div>
            </div>
            <div className='history-container'>
                <div className='text-container'>
                    <h1>The Timeless History of Ayurveda</h1>
                    <div className='intro'>
                        <h3>Introduction:</h3>
                        <p>
                            Welcome to our journey through the timeless history of Ayurveda,
                            the ancient system of holistic healing that has captivated hearts
                            and minds for thousands of years. Ayurveda, often referred to as
                            the "Science of Life," is a profound and intricate system of
                            medicine and well-being that traces its origins to the depths of
                            ancient India. Join us as we explore the rich tapestry of Ayurveda's
                            history, evolution, and enduring relevance in the modern world.
                        </p>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={yourImage5} alt='Ayurveda Image' />
                </div>
            </div>
        </div>
    );
}

export default History;
