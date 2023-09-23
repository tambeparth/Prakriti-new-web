import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = ({ text = "Welcome to Prakriti" }) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let timeout;

        const typeText = () => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
                timeout = setTimeout(typeText, 50); // Faster typing speed
            } else {
                setIsTyping(false);
                clearTimeout(timeout);

                setTimeout(() => {
                    setIsTyping(true);
                    currentIndex = 0;
                    setDisplayText('');
                }, 2000); // 2-second pause before resetting
            }
        };

        if (isTyping) {
            typeText();
        }

        return () => clearTimeout(timeout);
    }, [text, isTyping]);

    return (
        <center>
            <div className='main-content'>
                <div className="hero-section">
                    <h1 className="bold-text">{displayText}</h1>
                </div>
                <div className='paragraph'>
                    <p>Prakruti is unique to every individual just like your fingerprints. It is determined during the process of fertilisation and remains constant for your life time. Prakruti analysis is ayurveda’s unique way of determining a body type for an individual. Prakriti analysis is done using a questionnaire that includes several questions related to your lifestyle, physical traits, physiological functioning such as digestion, excretion, moods, nature, etc.

                        An expert Ayurvedic doctor can accurately interpret the answers given to question and determine your body type.

                        Different body types based prakriti include the following :<br />
                        <ul>
                            <div className='first'>
                                <li className='first-col'>Vata</li>
                                <li className='first-col'>Kapha</li>
                                <li className='first-col'>Kapha-pitta</li>
                                {/* <li className='first-col'>Vata-Pitta-kapha</li> */}
                            </div>
                            <div className='second'>
                                <li className='second-col'>Pitta</li>
                                <li className='second-col'>Vata-pitta</li>
                                <li className='second-col'>Kapha-Vata</li>
                            </div>
                        </ul>

                    </p>
                </div>
                <div className='btn'>
                    <Link to="/QuizComp" className="start-quiz-button">Start Quiz</Link>
                    <Link to="/ChatBot" className="chat-button">Chat With Us</Link>
                </div>

            </div >
        </center>
    );
};

export default Home;

