import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { produce } from 'immer'


class Review extends React.Component {
    constructor() {
        super()
        console.log('Review Constructor is called')
    }
    state = {
        like: 0
    }
    render() {
        console.log('render is called')
        return <>
            <h1>{this.state.like}</h1>
            <button onClick={() => {
                this.setState((prevState) => {
                    return produce(prevState, (draft) => {
                        draft.like += 1
                    })
                })
            }}>Like</button>
        </>
    }
    //
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
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