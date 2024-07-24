import { View, StyleSheet, Text, Button } from "react-native";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

const initialState = {
    like: 0,
}
const ReviewSlice = createSlice({
    initialState,
    name: 'review',
    reducers: {
        increment(state, action) {
            state.like++
        }
    }
})
//extract reducer from the slice
const ReviewReducer = ReviewSlice.reducer
//extract actions from the slice
const { increment } = ReviewSlice.actions

const appStore = configureStore({
    reducer: {
        reviewReducer: ReviewReducer
    }
})

const Review = () => {
    const review = useSelector(appState => {
        return appState.reviewReducer
    })
    const dispatch = useDispatch()

    const onLike = () => {
        dispatch(increment())
    }

    return <>
        <Text style={styles.label}>Like {review.like}</Text>
        <Button title="Like" onPress={onLike} />
    </>
}


function App() {
    return <Provider store={appStore}>
        <View style={styles.container}>
            <Review />
        </View>
    </Provider>
}

export default App;

//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    }
})