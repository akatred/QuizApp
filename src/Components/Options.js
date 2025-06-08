import React from "react";

export const Options = ({questions, dispatch, answer}) => {
  const hasAnswered = answer!==null;
  return(
    <>
    {questions.options.map((opt, index)=><button 
    className={` text-black
    text-2xl font-semibold m-2 p-2
    rounded-2xl cursor-pointer bg-gray-300
    ${hasAnswered ? index===questions.correctOption ? ' translate-x-2' : '':''} 
    ${hasAnswered ? index === questions.correctOption? ` !bg-green-700 !cursor-not-allowed`:' !cursor-not-allowed ':''}`}
    onClick={()=>dispatch({type:"newanswer" , payload:{index}})}
    key={opt}
    disabled={hasAnswered}
    >
    {opt}
    </button>)}
    </>
  );
};
