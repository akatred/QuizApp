// import React, { useState } from "react";
import Info from "./Info";

const Title = ({data, showinfo, setShowindex}) => {

    const handleclick = ()=>{
        setShowindex()
    }
 return (
  <>
  <div className="p-4 bg-gray-50 shadow-lg m-1/2 my-4">
  <div className="flex justify-between cursor-pointer" onClick={handleclick}>
  <span className=" justify-center px-20 text-xl text-center">{data.question}</span>
  <span className="px-20">⬇️</span>
  </div>
  {showinfo&&<Info data={data}/>}
  </div>
  </> 
)
};

export default Title;
