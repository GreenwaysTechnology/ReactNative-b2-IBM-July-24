import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { produce } from 'immer'
import './index.css'


const Review = () => {

    //state={} , setState(()=>{}) ==>useState ->hook 
    const [review, setReview] = useState({ like: 0, dislike: 0 })

    const onLike = () => {
        setReview(prevReview => {
            return produce(prevReview, (draft) => {
                draft.like += 1
            })
        })
    }

    return <>
        <h1>Review</h1>
        <h2>Like {review.like} Dislike:{review.dislike}</h2>
        <button onClick={onLike}>Like</button>
        <button onClick={() => {
          setReview(prevReview => {
            return produce(prevReview, (draft) => {
                draft.dislike += 1
            })
        })
        }}>Dislike</button>

    </>
}


const App = () => {
    return <div>
        <Review />
    </div>
}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)