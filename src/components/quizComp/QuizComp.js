import React, { useState } from "react";
import './QuizComp.css';

const QuizComp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        // ... (your questions array here)
        {
            question: "What is your typical body frame?",
            answers: ["A. Thin and wiry", "B. Moderate and well-proportioned", "C. Large and sturdy"],
            correctAnswer: "B",
        },
        {
            question: "How is your skin texture?",
            answers: ["A. Dry and rough", "B. Smooth and soft", "C. Oily and prone to acne"],
            correctAnswer: "B",
        },
        {
            question: "How is your hair texture?",
            answers: ["A. Thin and dry", "B. Silky and manageable", "C. Thick and oily"],
            correctAnswer: "B",
        },
        {
            question: "How do you react to stress?",
            answers: ["A. Easily anxious and worried", "B. Moderate stress, adaptable", "C. Slow to anger but intense when angered"],
            correctAnswer: "B",
        },
        {
            question: "How do you sleep?",
            answers: ["A. Light sleeper, prone to insomnia", "B. Moderate sleeper, generally good sleep", "C. Heavy sleeper, but can be lethargic"],
            correctAnswer: "B",
        },
        {
            question: "What is your appetite like?",
            answers: ["A. Irregular, often skip meals", "B. Regular, moderate appetite", "C. Strong, always hungry"],
            correctAnswer: "B",
        },
        {
            question: "How is your digestion?",
            answers: ["A. Irregular, gas and bloating", "B. Strong, efficient digestion", "C. Slow, often heavy feeling after meals"],
            correctAnswer: "B",
        },
        {
            question: "How is your energy level?",
            answers: ["A. Variable, can be low", "B. Steady, moderate energy", "C. High energy, but can burn out"],
            correctAnswer: "B",
        },
        {
            question: "How is your body temperature?",
            answers: ["A. Often cold hands and feet", "B. Moderate, comfortable temperature", "C. Easily overheated"],
            correctAnswer: "B",
        },
        {
            question: "How do you handle cold weather?",
            answers: ["A. Prefer warmth, dislike cold", "B. Tolerate cold reasonably well", "C. Love cold weather, dislike heat"],
            correctAnswer: "B",
        },
        {
            question: "How is your memory?",
            answers: ["A. Forgetful, short-term memory issues", "B. Average memory", "C. Sharp, excellent memory"],
            correctAnswer: "B",
        },
        {
            question: "How is your weight?",
            answers: ["A. Difficulty gaining weight", "B. Maintain weight easily", "C. Tend to gain weight easily"],
            correctAnswer: "B",
        },
        {
            question: "How is your mood?",
            answers: ["A. Anxious or worried", "B. Calm and even-tempered", "C. Can become easily irritable"],
            correctAnswer: "B",
        },
        {
            question: "How is your hair color?",
            answers: ["A. Light, blonde or red", "B. Moderate, brown or black", "C. Dark, black or deep brown"],
            correctAnswer: "B",
        },
        {
            question: "How is your nail texture?",
            answers: ["A. Brittle and dry", "B. Strong and flexible", "C. Thick and oily"],
            correctAnswer: "B",
        },
        {
            question: "How is your bowel movement?",
            answers: ["A. Irregular or constipated", "B. Regular and healthy", "C. Loose or frequent"],
            correctAnswer: "B",
        },
        {
            question: "How is your tolerance to spicy food?",
            answers: ["A. Low tolerance, avoid spicy food", "B. Moderate tolerance", "C. High tolerance, love spicy food"],
            correctAnswer: "B",
        },
        {
            question: "How is your thirst level?",
            answers: ["A. Often thirsty", "B. Moderate thirst", "C. Rarely thirsty"],
            correctAnswer: "B",
        },
        {
            question: "How is your sensitivity to light and sound?",
            answers: ["A. Sensitive to both", "B. Moderate sensitivity", "C. Not very sensitive"],
            correctAnswer: "B",
        },
        {
            question: "How do you handle change?",
            answers: ["A. Prefer routine, resistant to change", "B. Adaptable to change", "C. Seek change and new experiences"],
            correctAnswer: "B",
        },
        {
            question: "How is your endurance for physical activity?",
            answers: ["A. Low endurance, easily fatigued", "B. Moderate endurance", "C. High endurance, can be intense"],
            correctAnswer: "B",
        }
    ];

    const handleAnswerChange = (answer) => {
        // Check if the answer is correct
        if (answer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <div className="quiz-container">
            <h1>Know Your Prakruti Quiz</h1>
            <p className="question-count">Question {currentQuestion + 1} of {questions.length}</p>
            <p className="question-text">{questions[currentQuestion].question}</p>
            <ul className="answer-options">
                {questions[currentQuestion].answers.map((answer) => (
                    <li key={answer}>
                        <input
                            type="radio"
                            name="answer"
                            value={answer}
                            id={answer}
                            onChange={() => handleAnswerChange(answer)}
                        />
                        <label htmlFor={answer}>{answer}</label>
                    </li>
                ))}
            </ul>

            {/* Show the user's score after the last question */}
            {currentQuestion >= questions.length - 1 && (
                <p className="final-score">Your score is: {score} out of {questions.length}</p>
            )}
        </div>
    );
};

export default QuizComp;
