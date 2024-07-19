import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

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
    render() {
        const { movie: { like, dislike, name } } = this.state
        return <div>
            <h1>Movie Reviews</h1>
            <h2>Name: {name} </h2>
            <h2>Actresses {this.state.actor.name}</h2>
            <h3>Like : {like} Dislike {dislike}</h3>
            
            <button onClick={() => {
                this.setState(prevState => {
                    //return nested object
                    return {
                        ...prevState, //Level-0 : copy all outter properties
                        movie: {
                            ...prevState.movie, //Copy all movie properties
                            like: prevState.movie.like + 1
                        }

                    }
                })

            }}>Like</button>
            <button onClick={() => {
                this.setState(prevState => {
                    //return nested object
                    return {
                        ...prevState, //Level-0 : copy all outter properties
                        movie: {
                            ...prevState.movie, //Copy all movie properties
                            dislike: prevState.movie.dislike + 1
                        }

                    }
                })
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

