import React from 'react'
import ReactDOM from 'react-dom/client'

const Avatar = props => <img src={props.src} alt="Name" width={100} height={100} />

const Profile = (props) => {
    return <div>
        <Avatar src={props.src} />
        <h1>{props.name}</h1>
        <h2>born:{props.birthdate}</h2>
        <h2>Alive: {props.isAlive ? "Alive" : "No More"}</h2>
        <h3>Rating: {props.rating}</h3>
    </div>
}

const App = () => {
    const isAlive = false
    const imageSrc = 'https://i.imgur.com/1bX5QH6.jpg'
    return <>
        {/* {name:'',birthdate:} */}
        <Profile src={imageSrc} name='Alan Turing' birthdate={'23 June 1912'} isAlive={false} rating={9} />
        <Profile src={imageSrc} name='Alonzo Church' birthdate={'June 14, 1903'} isAlive={isAlive} rating={8} />
        {/* {Profile('Alan Turing','23 June 1912')}
        {Profile('Alonzo Church','June 14, 1903')} */}
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
