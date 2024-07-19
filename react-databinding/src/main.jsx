import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { produce } from 'immer'

class Review extends React.Component {

    //nested state
    state = {
        movie: {
            name: ' Atlas',
            like: 0,
            dislike: 0
        },
        actor: {
            name: 'Jennifer Lopez'
        }
    }
    onLike = () => {
        this.setState(prevState => {
            return produce(prevState, (draft) => {
                draft.movie.like += 1
            })
        })
    }
    onDislike = () => {
        this.setState(prevState => {
            return produce(prevState, (draft) => {
                draft.movie.dislike += 1
            })
        })
    }
    render() {
        return <div>
            {/* state as prop and function as prop */}
            <ReviewDashboard  {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
        </div>
    }
}

const ReviewDashboard = ({ movie: { name, like, dislike }, actor, onLike, onDislike }) => {
    return <>
        <h1>Movie Reviews</h1>
        <h2>Name: {name} </h2>
        <h2>Actresses {actor.name}</h2>
        <h3>Like : {like} Dislike {dislike}</h3>
        <button onClick={onLike}>Like</button>
        <button onClick={onDislike}>Dislike</button>
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

