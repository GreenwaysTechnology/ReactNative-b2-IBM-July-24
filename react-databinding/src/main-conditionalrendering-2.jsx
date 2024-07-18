import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const todoList = [{
    id: 1,
    name: 'learn react',
    status: true
},
{
    id: 2,
    name: 'Learn next',
    status: false
},
{
    id: 3,
    name: 'learn es',
    status: true
},
{
    id: 4,
    name: 'learn Angular',
    status: false
},
{
    id: 5,
    name: 'learn React Native',
    status: false
}

]

// const Item = props => {
//     const { name, status } = props.todo
//     //using Tenary Operator
//     return status ? <li>{name} ✔</li> : <li>{name} X </li>
// }

const Item = ({ todo: { name, status } }) => status ? <li>{name} ✔</li> : <li>{name} X </li>

const TodoList = props => {
    return <>
        <ul>
            {
                props.todos.map(todo => {
                    return <>
                        <Item todo={todo} />
                    </>
                })
            }
        </ul>
    </>
}
const App = () => {
    return <>
        <TodoList todos={todoList} />
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)