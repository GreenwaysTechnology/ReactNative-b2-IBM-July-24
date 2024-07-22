import ReactDOM from 'react-dom/client'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'

//createReducer 
const ReviewReducer = createReducer


const appStore = configureStore({
    reducer: {
        reviewReducer: ReviewReducer
    }
})



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
