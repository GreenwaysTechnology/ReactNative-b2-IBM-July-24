import React from 'react'
import ReactDOM from 'react-dom/client'

const Profile = (name,birthdate) => {
    return <div>
        <h1>{name}</h1>
        <h2>born:{birthdate}</h2>
    </div>
}

const App = () => {
    return <>
        {/* <Profile /> */}
        {Profile('Alan Turing','23 June 1912')}
        {Profile('Alonzo Church','June 14, 1903')}
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
