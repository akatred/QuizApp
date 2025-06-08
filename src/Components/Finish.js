import React from "react";

const Finish = ({points, maxpoints, dispatch}) => {
  return (
    <div className="justify-center py-32 px-40">
    <p className="font-bold text-3xl">Your Test has been Finished</p>
    <p className=" m-2  text-lg font-bold"> Score :  {points} / {maxpoints}  </p>
    <button className=" bg-black border border-black text-white m-2 p-2"
    onClick={()=>dispatch({type:"restart"})}
    >Restart Quiz</button>
    </div>

  );
};

export default Finish;
