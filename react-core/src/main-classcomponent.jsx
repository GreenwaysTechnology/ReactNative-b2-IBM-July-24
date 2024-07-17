import React from 'react'
import ReactDOM from 'react-dom/client'

class Heading extends React.Component {

    render() {
        return <h1>Hello!!!</h1>
    }

}


ReactDOM.createRoot(document.getElementById('root')).render(<Heading></Heading>)