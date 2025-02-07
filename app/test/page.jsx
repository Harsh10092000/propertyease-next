// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// const page = () => {
//   const [start, setStart] = useState(false);
//   const [time, setTime] = useState(10);
//   const [timeOver, setTimeOver] = useState(false);

//   const questions = [
//     {
//         question: "1 - What is the capital of France?",
//         options: {
//             option1: "Berlin",
//             option2: "Madrid",
//             option3: "Paris",
//             option4: "Rome"
//         },
//         answer: "Paris"
//     },
//     {
//         question: "2 - What is 2 + 2?",
//         options: {
//             option1: "3",
//             option2: "4",
//             option3: "5",
//             option4: "6"
//         },
//         answer: "4"
//     },
//     {
//         question: "3 - Who wrote 'To Kill a Mockingbird'?",
//         options: {
//             option1: "Harper Lee",
//             option2: "Mark Twain",
//             option3: "Ernest Hemingway",
//             option4: "F. Scott Fitzgerald"
//         },
//         answer: "Harper Lee"
//     },
//     {
//         question: "4 - What is the largest planet in our solar system?",
//         options: {
//             option1: "Earth",
//             option2: "Mars",
//             option3: "Jupiter",
//             option4: "Saturn"
//         },
//         answer: "Jupiter"
//     }
// ];


//   useEffect(() => {
//     let timer;
//     if (start && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (time === 0) {
//       setTimeOver(true);
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [start, time]);
//   return (
//     <div>
//       <div onClick={() => setStart(true)}>Start Test</div>
//       {start && (
//         <div>
//           <div>
//             Timer: {Math.floor(time / 60)}:
//             {(time % 60).toString().padStart(2, "0")}
//           </div>
//          <div>
//             {questions.map((item, index) => (
//                 <div key={index}>
//                     <div>
//                         <div>{item.question}</div>
//                         <div>{item.options.option1}</div>
//                         <div>{item.options.option2}</div>
//                         <div>{item.options.option3}</div>
//                         <div>{item.options.option4}</div>
//                     </div>
//                 </div>
//             ))}
//          </div>
//         </div>
//       )}
//       {timeOver && <div>Time over</div>}
//     </div>
//   );
// };

// export default page;



import Link from "next/link";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Welcome to the Quiz App</h1>
      <p className="lead">Test your knowledge with our fun quiz!</p>
      <Link href="/quiz" className="btn btn-primary btn-lg">
        Start Quiz
      </Link>
    </div>
  )
}