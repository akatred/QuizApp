import React, { useState } from "react";
import Title from "./Title";

export const Learn = ({topics, dispatch}) => {
    const [showindex, setShowindex] = useState(0)

    return topics.length===0 ? null :  (
        <>
          <div className=' justify-center flex py-5 '>
            <p className=' font-bold text-2xl'> Learn React </p>
          </div>
          {topics.map((topic, index)=><Title key={topic.id} 
          data={topic} 
          
          showinfo={index===showindex ? true : false}
          setShowindex={()=>{setShowindex(index)}}
    />)}
    <div>
        <button className=" bg-lime-950 text-white w-32 h-9 rounded-md font-bold text-2xl m-2" 
        onClick={()=>dispatch({type:"startquiz"})}>Quiz</button>
    </div>
        </>
      );
};
