import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { produce } from 'immer'


class Review extends React.Component {
    state = {
        posts: [], //data
        error: null,
        isLoading: false
    }


    async componentDidMount() {
        //api call
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const response = await fetch(url)
            const posts = await response.json()
            console.log(posts)
            //pouplate the data with state
            this.setState(prevState => {
                return produce(prevState, (draft) => {
                    //se
                    draft.posts = posts
                    draft.isLoading = true
                })
            })
        }
        catch (err) {
            console.log(posts)
            this.setState(prevState => {
                return produce(prevState, (draft) => {
                    //se
                    draft.err = err
                    // draft.isLoading = true
                })
            })
        }
    }

    render() {
        //conditional rendering : based on ui state we need different ui
        const { posts, error, isLoading } = this.state
        if (error) {
            return <div style={{ marginLeft: 50 }}>
                <h1>Error : {error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        } else {
            return <div style={{ marginLeft: 50 }}>
                <h1>Posts</h1>
                <hr />
                <ul>
                    {posts.map(post => {
                        return <li>{post.title}</li>
                    })}
                </ul>
            </div>

        }

    }



}

const App = () => {
    return <div>
        <Review />
    </div>
}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)