import React from 'react'
import ReactDOM from 'react-dom/client'

const Profile = () => {

  const name = 'Alan Turing'
  const birthdate = '23 June 1912'

  return <div>
    <h1>{name}</h1>
    <h2>born:{birthdate}</h2>
  </div>
}

const App = () => {
  return <>
    <Profile />
  </>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
