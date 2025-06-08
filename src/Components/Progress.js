import React from "react";

const Progress = ({index, numofquestions, points}) => {
  return (
    <div className="justify-center flex space-x-44 w-auto py-4">
    <p> Questions: <strong>{index+1}/{numofquestions}</strong> </p>
    <p>Points : <strong>{points}</strong></p>
    </div>
  );
};

export default Progress;
