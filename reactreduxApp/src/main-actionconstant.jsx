import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { produce } from 'immer'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'


//action constant
const like = 'review/like'
const dislike = 'review/dislike'


const LikeReducer = (review = { like: 10 }, action) => {
    //logic
    switch (action.type) {
        case like:
            return produce(review, draft => {
                draft.like += 1
            })
        default:
            return review;
    }
}
const DislikeReducer = (review = { dislike: 10 }, action) => {
    switch (action.type) {
        case dislike:
            return produce(review, draft => {
                draft.dislike += 1
            })

        default:
            //default state- initali state
            return review;
    }
}

const appStore = configureStore({
    reducer: {
        likeReducer: LikeReducer,
        dislikeReducer: DislikeReducer
    }
})

const Like = () => {
    const review = useSelector(appState => {
        return appState.likeReducer
    })
    const dispatch = useDispatch()

    return <>
        <h1>Like</h1>
        <h1>like :{review.like}</h1>
        <button onClick={() => {
            dispatch({ type: like })
        }}>Like</button>

    </>

}
const Dislike = () => {
    const review = useSelector(appState => {
        return appState.dislikeReducer
    })
    const dispatch = useDispatch()

    return <>
        <h1>Dislike</h1>
        <h1>dislike :{review.dislike}</h1>
        <button onClick={() => {
            dispatch({ type: dislike })
        }}>Like</button>

    </>

}


const Review = () => <>
    <Like />
    <Dislike />
</>


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
