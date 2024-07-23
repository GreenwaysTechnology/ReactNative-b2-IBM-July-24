import ReactDOM from 'react-dom/client'
import React from 'react'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'

//without creatAction

//action constant
const likeAction = 'review/like'
const dislikeAction = 'review/dislike'

//action creator
function increment(payload) {
    return {
        type: likeAction,
        payload: payload
    }
}


//createReducer 
const initialState = {
    like: 0,
    dislike: 0
}

const ReviewReducer = createReducer(initialState, (builder) => {
    builder.addCase(likeAction, (state, action) => {
        //immerjs code
        console.log(action)
        state.like += action.payload
    }).addCase(dislikeAction, (state, action) => {
        state.dislike++
    }).addDefaultCase((state, action) => { })
})


const appStore = configureStore({
    reducer: {
        reviewReducer: ReviewReducer
    }
})



const Review = () => {
    const review = useSelector(appState => {
        console.log(appState.reviewReducer)
        return appState.reviewReducer
    })
    const dispatch = useDispatch()
    return <>
        <h1>Review</h1>
        <h1>like :{review.like} dislike :{review.dislike}</h1>
        <button onClick={() => {
            dispatch(increment(2))
        }}>Like</button>
        <button onClick={() => {
            dispatch({ type: dislikeAction })
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
