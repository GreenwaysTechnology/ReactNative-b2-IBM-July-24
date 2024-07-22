import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { produce } from 'immer'
import './index.css'


const Review = () => {
    const [like, setLike] = useState(0)

    const onLike = () => {
        // setLike((prvLike) => {
        //     return prvLike + 1
        // })
        // setLike((prvLike) =>prvLike + 1)
        setLike(like + 1)
    }

    return <>
        <h1>Review</h1>
        <h2>Like {like}</h2>
        <button onClick={onLike}>Like</button>
        <button onClick={() => {
            setLike(like - 1)
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