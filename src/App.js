import React, { useEffect, useReducer } from 'react'
import Error from './Components/Error'
import Loading from './Components/Loading'
import Quiz from './Components/Quiz'
import Questions from './Components/Questions'
import Finish from './Components/Finish'
import { Learn } from './Components/Learn'

const initialstate = {
  questions : [],
  status : "loading", 
  react_topics : [],
  index : 0,
  points : 0,
  answer : null,
  questionsloaded : false,
  topicsloaded : false
}

function reducer(state, action){
  switch(action.type){
    case "dataReceived" :
      return {
        ...state,
        questions : action.payload,
        questionsloaded: true,
        status : state.topicsloaded ? "learning" : "ready"
      }
      case "topicsReceived" :
      return {
        ...state,
        react_topics : action.payload,
        topicsloaded : true,
        status : state.questionsloaded ? "ready" : "learning"
      }
      case "startquiz" : 
      return {
        ...state,
        status : "ready"
      }
      case "datafailed" : 
      return {
        ...state,
        status : "error"
      }
      case "start" : 
      return{
        ...state,
        status : "active",
      }
      case "next" :
        return{
          ...state,
          index : state.index+1,
          answer : null
        }
      case "newanswer" :
      const question = state.questions.at(state.index) 
      return {
        ...state,
        answer : action.payload,
        points : 
             action.payload.index === question.correctOption 
             ? state.points+question.points : state.points,
      }
      case "finished" : 
      return {
        ...state,
        status: 'finished'
      }
      case "restart" :
        return {
          ...initialstate,
          status: "ready",
          questions:state.questions
        }
      case "Timeover" : 
      return {
        ...state,
        status : 'finished'
      }
      default : return state 
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialstate)

  const {questions, react_topics, status, index, answer, points} = state

  const numofquestions = (questions.length)
  console.log(numofquestions)

  const maxpoints = questions.reduce((prev,curr)=>prev+curr.points, 0)

  useEffect(()=>{
    fetchreacttopics()
    fetchquestions()
  }, [])

  const fetchquestions = async() => {
    try{
      const data = await fetch("http://localhost:9000/questions")
      const json = await data.json()
      dispatch({type:"dataReceived", payload:json})
    }catch(err){
      dispatch({type:"datafailed", payload:err})
    }
    
  }

  const fetchreacttopics = async() => {
    try{
    const topics  = await fetch("http://localhost:9000/react")
    const json = await topics.json()
    dispatch({type:"topicsReceived", payload:json})
    }catch(err){
      dispatch({type:"datafailed", payload:err})
    }
    
  }

  
  return (
    <>
    <main>
      {status ==="error" && <Error/>}
      {status ==="loading" && <Loading />}
      {status==="learning"&&<Learn topics={react_topics} dispatch={dispatch}/>}
      {status ==="ready" && <Quiz num={numofquestions} dispatch={dispatch}/>}
      {status ==="active" && 
      <Questions questions={questions[index]} dispatch={dispatch} 
      answer={answer} index={index} numofquestions={numofquestions} points={points}/>
      }
      {status === "finished" && <Finish points={points} maxpoints={maxpoints} dispatch={dispatch}/>}

    </main>
    </>
  );
};

export default App;
