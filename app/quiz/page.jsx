// "use client"; // Mark this as a Client Component

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const questions = [
//   {
//     id: 1,
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Paris",
//   },
//   {
//     id: 2,
//     question: "Who wrote 'To Kill a Mockingbird'?",
//     options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"],
//     answer: "Harper Lee",
//   },
//   {
//     id: 3,
//     question: "What is the largest planet in our solar system?",
//     options: ["Earth", "Jupiter", "Saturn", "Mars"],
//     answer: "Jupiter",
//   },
// ];

// export default function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question

//   useEffect(() => {
//     if (timeLeft === 0) {
//       handleNext();
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup timer on unmount
//   }, [timeLeft, currentQuestion]);

//   const handleNext = () => {
//     if (selectedOption === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }
//     setSelectedOption("");
//     setCurrentQuestion(currentQuestion + 1);
//     setTimeLeft(10); // Reset timer for the next question
//   };

//   if (currentQuestion >= questions.length) {
//     return (
//       <div className="container text-center mt-5">
//         <h2>Quiz Completed!</h2>
//         <p>
//           Your score is {score} out of {questions.length}
//         </p>
//         <Link href="/test" className="btn btn-primary">
//           Restart Quiz
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-5">
//       <h2>Question {currentQuestion + 1}</h2>
//       <p>{questions[currentQuestion].question}</p>
//       <div className="mb-3">
//         <strong>Time Left: {timeLeft} seconds</strong>
//       </div>
//       <div className="list-group">
//         {questions[currentQuestion].options.map((option, index) => (
//           <button
//             key={index}
//             className={`list-group-item list-group-item-action ${
//               selectedOption === option ? "active" : ""
//             }`}
//             onClick={() => setSelectedOption(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <button
//         className="btn btn-primary mt-3"
//         onClick={handleNext}
//         disabled={!selectedOption}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// ------------------------------- example of usememo and memo  -------------------------------

// const ItemList = React.memo(({ items }) => {
//     console.log("ItemList re-rendered");

//     // Sorting the items can be an expensive operation
//     const sortedItems = useMemo(() => {
//       return items.sort((a, b) => a.name.localeCompare(b.name)); // Expensive sorting
//     }, [items]); // Only re-sort when items change

//     return (
//       <ul>
//         {sortedItems.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     );
//   });
// ------------------------------- example end  -------------------------------

"use client"; // Mark this as a Client Component

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import React from "react";

const ButtonComponent = React.memo(
  ({
    option,
    questionId,
    handleSelect,
    isTimeUp,
    selectedOption,
    correctAnswer,
  }) => {
    
    console.log("hello"); // Now this will only log when the option changes
    const isSelected = selectedOption === option;
    const getButtonClass = () => {
      if (isTimeUp) {
        if (isSelected) {
          return option === correctAnswer ? "correct-ans" : "incorrect-ans";
        }
        return option === correctAnswer ? "correct-ans" : "";
      }
      return isSelected ? "active" : "";
    };
    return (
      <button
        onClick={() => handleSelect(questionId, option)}
        className={`list-group-item list-group-item-action ${getButtonClass()}`}
        disabled={isTimeUp ? true : false}
      >
        {option}
      </button>
    );
  }
);

const questions = [
  {
    question: "1 - What is the capital of France?",
    options: {
      option1: "Berlin",
      option2: "Madrid",
      option3: "Paris",
      option4: "Rome",
    },
    answer: "Paris",
  },
  {
    question: "2 - What is 2 + 2?",
    options: {
      option1: "3",
      option2: "4",
      option3: "5",
      option4: "6",
    },
    answer: "4",
  },
  {
    question: "3 - Who wrote 'To Kill a Mockingbird'?",
    options: {
      option1: "Harper Lee",
      option2: "Mark Twain",
      option3: "Ernest Hemingway",
      option4: "F. Scott Fitzgerald",
    },
    answer: "Harper Lee",
  },
  {
    question: "4 - What is the largest planet in our solar system?",
    options: {
      option1: "Earth",
      option2: "Mars",
      option3: "Jupiter",
      option4: "Saturn",
    },
    answer: "Jupiter",
  },
];

export default function Quiz() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [answers, setAnswers] = useState({});
  const [isTimeUp, setIsTimeUp] = useState(false);
  const memoizedQuestions = useMemo(() => questions, []);

  //   const timerRef = useRef(null); // Create a ref for the timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsTimeUp(true);
    }
    //alert("times up")
  }, [timeLeft]);

  // const secondsRef = useRef(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       secondsRef.current += 1; // Update ref value without re-rendering
  //      // console.log('Seconds:', secondsRef.current); // Log the value
  //       setTimeLeft(secondsRef.current);
  //     }, 1000);

  //     return () => clearInterval(interval); // Cleanup on unmount
  //   }, []);

  // const timerRef = useRef(null); // Create a ref for the timer

  //   useEffect(() => {
  //     if (timeLeft > 0) {
  //       timerRef.current = setInterval(() => {
  //         setTimeLeft((prevTime) => prevTime - 1);
  //       }, 1000);
  //     } else {
  //       setIsTimeUp(true);
  //     }

  //     return () => clearInterval(timerRef.current);
  //   }, [timeLeft]);

  // Memoizing the handleSelect function to prevent re-renders of ButtonComponent
  const handleSelect = useCallback((questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  }, []);

  //console.log("answers : ", answers);

  const [score, setScore] = useState(0);
  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      console.log("question.answer : ", question.answer);
      if (answers[index] === question.answer) {
        calculatedScore += 1;
      }
    });
    console.log("calculatedScore : ", calculatedScore);
    setScore(calculatedScore);
  };

  return (
    <div className="container mt-5">
      <h2>Question </h2>

      <div className="mb-3">
        <div>
          Timer: {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </div>
      </div>
      <div className="list-group">
        {memoizedQuestions.map((item, index) => (
          <div key={index}>
            {item.question}
            {/* <ButtonComponent
              option={item.options.option1}
              questionId={index}
              handleSelect={handleSelect}
              isTimeUp={isTimeUp}
              selectedOption={answers[index]}
            />
            <ButtonComponent
              option={item.options.option2}
              questionId={index}
              handleSelect={handleSelect}
              isTimeUp={isTimeUp}
              selectedOption={answers[index]}
            />
            <ButtonComponent
              option={item.options.option3}
              questionId={index}
              handleSelect={handleSelect}
              isTimeUp={isTimeUp}
              selectedOption={answers[index]}
            />
            <ButtonComponent
              option={item.options.option4}
              questionId={index}
              handleSelect={handleSelect}
              isTimeUp={isTimeUp}
              selectedOption={answers[index]}
            /> */}
            {Object.values(item.options).map((option, idx) => (
              <ButtonComponent
                key={idx}
                option={option}
                questionId={index}
                handleSelect={handleSelect}
                isTimeUp={isTimeUp}
                selectedOption={answers[index]}
                correctAnswer={item.answer}
              />
            ))}
          </div>
        ))}

        <div onClick={handleSubmit}>Submit test</div>
        <div>FinalScore - {score}</div>
      </div>
    </div>
  );
}
