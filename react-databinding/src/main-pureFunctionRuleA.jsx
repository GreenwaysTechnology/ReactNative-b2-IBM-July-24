//pure functions
// if function receives input, the function returns the input without any mutation(changes)...

//is this function is pure or not : pure 
function Hello(message) {
    return message
}
console.log(Hello('hello'))

// //is this function is pure or not : impure function 

// function Hello(message) {
//     return message.toUpperCase()
// }
// console.log(Hello('hello'))

import React from 'react'
import ReactDOM from 'react-dom/client'


//Every component is pure function with respect to props.
const Greeter = props => {
    props.message = 'hai'
    return <h1>{props.message}</h1>
}

const App = () => {
    return <Greeter message="hello" />
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)



