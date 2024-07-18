import React from 'react'
import ReactDOM from 'react-dom/client'

const Avatar = ({ src }) => <img src={src} alt="Name" width={100} height={100} />

// const Profile = (props) => {
//     const { src, name, isAlive, rating,birthdate } = props
//     return <div>
//         <Avatar src={src} />
//         <h1>{name}</h1>
//         <h2>born:{birthdate}</h2>
//         <h2>Alive: {isAlive ? "Alive" : "No More"}</h2>
//         <h3>Rating: {rating}</h3>
//     </div>
// }

const Profile = ({ src, name, isAlive, rating, birthdate }) => <div>
    <Avatar src={src} />
    <h1>{name}</h1>
    <h2>born:{birthdate}</h2>
    <h2>Alive: {isAlive ? "Alive" : "No More"}</h2>
    <h3>Rating: {rating}</h3>
</div>



const App = () => {
    const isAlive = false
    const imageSrc = 'https://i.imgur.com/1bX5QH6.jpg'
    return <>
        <Profile src={imageSrc} name='Alan Turing' birthdate={'23 June 1912'} isAlive={false} rating={9} />
        <Profile src={imageSrc} name='Alonzo Church' birthdate={'June 14, 1903'} isAlive={isAlive} rating={8} />
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
