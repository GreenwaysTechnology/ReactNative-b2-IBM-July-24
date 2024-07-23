import ReactDOM from 'react-dom/client'
import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'
import logger from 'redux-logger'


const initialState = {
    like: 0,
    dislike: 0
}
const ReviewSlice = createSlice({
    //initialState: initialState,
    initialState,
    name: 'review',
    reducers: {
        //api
        increment(state, action) {
            state.like++
        },
        decrement(state, action) {
            state.dislike++
        },
        incrementByAmount(state, action) {
            state.like += action.payload
        }
    }

})
//extract reducer from the slice
const ReviewReducer = ReviewSlice.reducer
//extract actions from the slice
const { increment, decrement, incrementByAmount } = ReviewSlice.actions


const appStore = configureStore({
    reducer: {
        reviewReducer: ReviewReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})



const Review = () => {
    const review = useSelector(appState => {
        return appState.reviewReducer
    })
    const dispatch = useDispatch()
    return <>
        <h1>Review</h1>
        <h1>like :{review.like} dislike :{review.dislike}</h1>
        <button onClick={() => {
            dispatch(increment())
        }}>Like</button>
        <button onClick={() => {
            dispatch(decrement())
        }}>Dislike</button>

    </>
}


const App = () => {

    //React -Redux binding Component
    return <Provider store={appStore}>
        <Review></Review>
    </Provider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
