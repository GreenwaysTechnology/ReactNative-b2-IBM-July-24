import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";


const Review = () => {
    const [like, setLike] = useState(0)

    const onLike = () => {
        setLike(like + 1)
    }

    return <>
        <Text style={styles.label}>Like {like}</Text>
        <Button title="Like" onPress={onLike} />
    </>
}


function App() {
    return <View style={styles.container}>
        <Review />
    </View>
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