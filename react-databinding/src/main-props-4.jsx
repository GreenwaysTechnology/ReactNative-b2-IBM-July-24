import React from 'react'
import ReactDOM from 'react-dom/client'

const Avatar = ({ src }) => <img src={src} alt="Name" width={100} height={100} />

const Profile = ({ src = 'https://i.imgur.com/1bX5QH6.jpg', name = 'Your Name', isAlive = false, rating = 0, birthdate = '01 Jan 1950' }) => <div>
    <Avatar src={src} />
    <h1>{name}</h1>
    <h2>born:{birthdate}</h2>
    <h2>Alive: {isAlive ? "Alive" : "No More"}</h2>
    <h3>Rating: {rating}</h3>
</div>

//old way:
// Profile.defaultProps = {
//     src: "https://i.imgur.com/1bX5QH6.jpg",
//     name: 'Your Name',
//     birthdate: '01 Jan 1950',
//     isAlive: false,
//     rating:0
// }


const App = () => {
    const isAlive = false
    const imageSrc = 'https://i.imgur.com/1bX5QH6.jpg'
    return <>
        {/* <Profile src={imageSrc} name='Alan Turing' birthdate={'23 June 1912'} isAlive={false} rating={9} />
        <Profile src={imageSrc} name='Alonzo Church' birthdate={'June 14, 1903'} isAlive={isAlive} rating={8} /> */}
        <Profile />
        <Profile src={imageSrc} name='Alan Turing' birthdate={'23 June 1912'} isAlive={false} rating={9} />
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
