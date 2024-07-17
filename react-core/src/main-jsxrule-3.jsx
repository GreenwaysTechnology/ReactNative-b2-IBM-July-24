import ReactDOM from 'react-dom/client'

const heading = () => {

    return <>
        <h1>Welcome to IBM</h1>
        <p>Hello</p>
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(<heading/>)

