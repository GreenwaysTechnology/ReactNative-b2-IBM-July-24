import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        name: ' Atlas',
        rating: 0
    }
    render() {
        return <div>
            <h1>Movie Reviews</h1>
            <h2>Name: {this.state.name} </h2>
            <h3>Rating :{this.state.rating}</h3>
            <button onClick={() => {
                this.setState(prevState => ({ ...prevState, rating: prevState.rating + 1 }))
            }}>Rate</button>
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

