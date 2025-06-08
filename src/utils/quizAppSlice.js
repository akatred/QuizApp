import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchquestions = createAsyncThunk('fetchingquestions', async() => {
      const data = await fetch("http://localhost:9000/questions")
      return data.json()
  })

export const fetchreacttopics = createAsyncThunk('fetchingtopics',async() => {
    const topics  = await fetch("http://localhost:9000/react")
    return topics.json()
  })

const initialState = {
    questions : [],
    status : "loading", 
    react_topics : [],
    index : 0,
    points : 0,
    answer : null,
    questionsloaded : false,
    topicsloaded : false
  }

const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{
        dataReceived : (state,action)=>{
        state.questions = action.payload;
        state.questionsloaded= true;
        state.status = state.topicsloaded ? "learning" : "ready"
        },
        topicsReceived :(state,action)=>{
        state.react_topics = action.payload;
        state.topicsloaded = true;
        state.status = state.questionsloaded ? "ready" : "learning"
        },
        startquiz:(state,action)=>{
            state.status = "ready"

        },
        datafailed:(state,action)=>{
            state.status = "error"
        },
        start:(state)=>{
            state.status="active"
        },
        next:(state,action)=>{
            state.index = state.index+1;
            state.answer = null
        },
        newanswer : (state,action)=>{
            const question = state.questions.at(state.index);
            state.answer = action.payload;
            state.points = action.payload.index === question.correctOption 
                           ? state.points+question.points : state.points
        },
        finished : (state,action)=>{
            state.status = 'finished'
        },
        restart : (state,action)=>{
            state.status = "ready";
            state.index = 0;
            state.points = 0;
            state.answer = null;
            state.questionsLoaded = false;
            state.topicsLoaded = false;
        },
        Timeover:(state)=>{
            state.status="finished"
        },
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchquestions.fulfilled ,(state,action)=>{
            state.questions = action.payload
            if(state.questions.length>0){
                state.status="ready"
            }
            else{
                state.status="learning"
            }
        })
        .addCase(fetchreacttopics.fulfilled,(state,action)=>{
            state.react_topics = action.payload
        })
        .addCase(fetchreacttopics.rejected,(state)=>{
            state.status="error"
        })
        .addCase(fetchquestions.rejected,(state)=>{
            state.status = "error"
        })
    }
})

export const {dataReceived,
    topicsReceived,
    startquiz,
    datafailed,
    start,
    next,
    newanswer,
    finished,
    restart,
    Timeover} = quizSlice.actions

export const quizReducer = quizSlice.reducer




