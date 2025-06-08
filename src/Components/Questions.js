import React from "react";
import { Options } from "./Options";
import Progress from "./Progress";
import NextButton from "./NextButton";
import CountdownTimer from "./CountdownTimer";

const Questions = ({questions, dispatch, answer, index, numofquestions, points}) => { 
  return (
    <>
    <main className=" py-40 justify-center text-center flex-col">
      <CountdownTimer dispatch={dispatch}/> 
      <header>
      <Progress index={index} numofquestions={numofquestions} points={points}/> 
      </header>
        <h2 className=" text-4xl font-bold text-pink-500">{questions.question}</h2>
        <div className=" flex flex-col m-2 justify-center">
        <Options questions={questions} dispatch={dispatch} answer={answer}/>
        </div>
        <NextButton answer = {answer} dispatch={dispatch} index={index} numofquestions={numofquestions}/>

    </main>
    </>
  )
};

export default Questions;
