import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    //declare state
    state = {
        name: ' Atlas',
        rating: 0
    }
    //listener
    onRate = () => {
        //immutable logic,after immutable we need to trigger render method
        this.setState((prevState) => {
            console.log(prevState)
            //write immutable 
            // //method1 
            // return {
            //     name: prevState.name,
            //     rating: prevState.rating + 1
            // }
            // //method2
            // return Object.assign({}, prevState, { rating: prevState.rating + 1 })
            //method3
            return { ...prevState, rating: prevState.rating + 1 }
        })
    }
    render() {
        console.log('render')
        return <div>
            <h1>Movie Reviews</h1>
            <h2>Name: {this.state.name} </h2>
            <h3>Rating :{this.state.rating}</h3>
            <button onClick={this.onRate}>Rate</button>
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

