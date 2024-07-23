import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector, Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';


const initialState = {
    entities: [],
    loading: false,

}
//posts/getPosts - action name
//posts/getPosts/pending
//posts/getPosts/fulfilled
const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return posts
})


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.entities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }

})

export const postReducer = postSlice.reducer


//store.js
export const appStore = configureStore({
    reducer: {
        posts: postReducer
    }
})
export default function Home() {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => state.posts)

    //componentDidMount
    useEffect(() => {
        dispatch(getPosts())
    }, [])



    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Blog Posts</h2>
            {entities.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}

const App = () => <div style={{ margin: 50, padding: 50, backgroundColor: 'ButtonFace' }}>
    <Provider store={appStore}>
        <h1 style={{ textAlign: 'center' }}>React Redux Integration App</h1>
        <Home />
    </Provider>

</div>
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);