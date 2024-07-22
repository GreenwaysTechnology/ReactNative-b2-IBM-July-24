import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { produce } from 'immer'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'

//redux -Reducer-pure function which returns immutable object.

//(initalState,action)=>immutable object
//action = {type:'LIKE'}
const ReviewReducer = (review = { like: 10, dislike: 10 }, action) => {
    //logic
    switch (action.type) {
        case 'LIKE':
            //return { ...review, like: review.like + 1 }
            return produce(review, draft => {
                draft.like += 1
            })
        case 'DISLIKE':
            //return { ...review, like: review.like + 1 }
            return produce(review, draft => {
                draft.dislike += 1
            })

        default:
            //default state- initali state
            return review;
    }
}

//create store and bind reducer with store.

const appStore = configureStore({
    reducer: {
        //list of reducers
        //key:value
        //nameOfreducer(this name can be anything):Reducer function fuction  
        reviewReducer: ReviewReducer
    }
})


///React without redux : react has state and biz logic
// const Review = () => {
//     const [review, setReview] = useState({ like: 0, dislike: 0 })

//     const onLike = () => {
//         setReview((prevReview) => {
//             return produce(prevReview, draft => {
//                 draft.like += 1
//             })
//         })
//     }
//     return <>
//         <h1>Review</h1>
//         <h2>Like : {review.like} Dislike: {review.dislike}</h2>
//         <button onClick={onLike}>Like</button>
//     </>
// }

const Review = () => {
    //access state from redux
    const review = useSelector(appState => {
        console.log(appState.reviewReducer)
        //appState.reducerName
        return appState.reviewReducer
    })
    //SEND ACTION TO redux via dispatcher.
    //we need dispatcher now
    const dispatch = useDispatch()

    const onLike = () => {
        //invoke reducer biz logic:you cant call reducer directly, we need to pass action 
        //object
        const likeAction = {
            type: 'LIKE'
        }
        dispatch(likeAction)
    }
    return <>
        <h1>Review</h1>
        <h1>like :{review.like} dislike :{review.dislike}</h1>
        <button onClick={onLike}>Like</button>
        <button onClick={() => {
            dispatch({ type: 'DISLIKE' })
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
