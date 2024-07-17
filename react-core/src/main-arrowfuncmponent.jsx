import ReactDOM from 'react-dom/client'


// const Heading = () => {
//     return <h1>Hello!</h1>
// }
const Heading = () => <h1>Hello!</h1>

// ReactDOM.createRoot(document.getElementById('root')).render(Heading())
ReactDOM.createRoot(document.getElementById('root')).render(<Heading></Heading>)