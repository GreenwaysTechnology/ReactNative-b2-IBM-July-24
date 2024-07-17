import ReactDOM from 'react-dom/client'

//component using function
function Heading() {
    return <h1>Hello !</h1>
}



ReactDOM.createRoot(document.getElementById('root')).render(Heading())