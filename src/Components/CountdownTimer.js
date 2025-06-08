import React, { useState, useEffect} from "react";

const CountdownTimer = ({dispatch}) => {
    const [minute, setMinute] = useState(2)
    const [second, setSecond] = useState(59)

    useEffect(()=>{
      let interval = null
        interval = setInterval(()=>{
          if(second>0){
            setSecond(seconds=>seconds-1)
          }else if(minute>0){
            setMinute(minute=>minute-1)
            setSecond(59)
          }else if(second===0 && minute===0){
            clearInterval(interval)
            dispatch({type:'Timeover'})
          }
        },1000)
        return(()=>{
          clearInterval(interval)
        })
      },[dispatch,minute,second])

  return(
    <>
    <div className="flex justify-center items-center">
    <div className="flex space-x-0.5">
   <input
    type='number'
    className="p-2 text-center"
    value={minute}
    />
    <input
    type='number'
    className="p-2 text-center"
    value={second}
    />
    </div>
    </div>
    </>
  )
};

export default CountdownTimer;
