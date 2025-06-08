import React from "react";

const NextButton = ({answer, dispatch, index, numofquestions}) => {

 if(answer===null) return null
 if(index<numofquestions-1) return (
    <>
       {
       <button className=" bg-lime-950 text-white w-32 h-9 rounded-md font-bold text-2xl m-2 " 
       onClick={()=>dispatch({type:"next"})}>Next</button>
       } 
    </>
  )
  if(index===numofquestions-1) return (
   <>
      {
      <button className=" bg-lime-950 text-white w-32 h-9 rounded-md font-bold text-2xl m-2 " 
      onClick={()=>dispatch({type:"finished"})}>Finish</button>
      } 
   </>
 )
};

export default NextButton;
