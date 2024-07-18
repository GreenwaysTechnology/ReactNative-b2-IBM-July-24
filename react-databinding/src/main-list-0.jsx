import ReactDOM from 'react-dom/client'
import React from 'react'


const List = props => {

   const { names } = props
    return <>
        <ul>
            {names.map(name => {
                return <li>{name}</li>
            })}
        </ul>
    </>
}



const App = () => {
    const names = ['Subramanian', 'Murugan', 'Chandrasekar', 'Percy', 'Alan Turing']
    return <>
        <List names={names} />
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
