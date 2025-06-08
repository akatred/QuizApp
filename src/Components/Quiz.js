import React from "react";

const Quiz = ({num, dispatch}) => {
  return num.length===0?null:(
    <>
    <main className="py-36 flex-COL justify-center">
        <div className="text-center">
        <h2 className="text-5xl font-bold">Welcome To Quiz</h2>
        <h3 className="p-2 m-2">{num} questions to test your React mastery</h3>
        <button className=" bg-gray-700 text-white w-32 h-9 m-6" onClick={()=>dispatch({type:"start"})}>Start Timer</button>
        </div>
       
        
    </main>
    </>
  );
};

export default Quiz;
