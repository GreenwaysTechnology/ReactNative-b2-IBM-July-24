import ReactDOM from 'react-dom/client'
// import React, { Fragment } from 'react'

const Heading = () => {

    // return <React.Fragment>
    //     <h1>Welcome to IBM</h1>
    //     <p>Hello</p>
    // </React.Fragment>
    // return <Fragment>
    //     <h1>Welcome to IBM</h1>
    //     <p>Hello</p>
    // </Fragment>
    return <>
        <h1>Welcome to IBM</h1>
        <p>Hello</p>
    </>
}


ReactDOM.createRoot(document.getElementById('root')).render(<Heading></Heading>)

