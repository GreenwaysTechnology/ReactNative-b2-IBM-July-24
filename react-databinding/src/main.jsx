import ReactDOM from 'react-dom/client'
import React from 'react'

const Avatar = ({ title = "", src = 'https://i.imgur.com/1bX5QH6.jpg', name = 'Your Name', isAlive = false, rating = 0, birthdate = '01 Jan 1950' }) => <>
    <h1>{title}</h1>
    <img src={src} alt="Name" width={100} height={100} />
    <h1>{name}</h1>
    <h2>born:{birthdate}</h2>
    <h2>Alive: {isAlive ? "Alive" : "No More"}</h2>
    <h3>Rating: {rating}</h3>
</>
const Profile = props => <div>
    {/* <Avatar src={props.src} name={props.name} isAlive={props.isAlive} birthdate={props.birthdate} rating={props.rating} /> */}
    {/* We can pass props simply using spread notation (...) */}
    <Avatar {...props} title="Most Popular People" />
</div>

const App = () => {
    const isAlive = false
    const imageSrc = 'https://i.imgur.com/1bX5QH6.jpg'
    return <>
        <Profile />
        <Profile src={imageSrc} name='Alan Turing' birthdate={'23 June 1912'} isAlive={false} rating={9} />
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
