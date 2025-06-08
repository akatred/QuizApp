import {configureStore} from '@reduxjs/toolkit'
import {quizReducer} from './quizAppSlice'
const appStore = configureStore({
    reducer:{
        quiz:quizReducer
    }
})

export default appStore