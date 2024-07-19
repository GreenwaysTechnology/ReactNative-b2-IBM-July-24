import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        name: ' Atlas',
        like: 0,
        dislike: 0
    }
    render() {
        const { like, dislike, name } = this.state
        return <div>
            <h1>Movie Reviews</h1>
            <h2>Name: {name} </h2>
            <h3>Like : {like} Dislike {dislike}</h3>
            <button onClick={() => {
                this.setState(prevState => ({ ...prevState, like: prevState.like + 1 }))
            }}>Like</button>
            <button onClick={() => {
                this.setState(prevState => ({ ...prevState, dislike: prevState.dislike + 1 }))
            }}>Dislike</button>
        </div>
    }
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

