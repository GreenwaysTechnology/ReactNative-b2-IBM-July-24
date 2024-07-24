import { Text, View, StyleSheet } from "react-native";


const Welcome = ({ message = 'Welcome to React Native' }) => {
    return <>
        <Text style={styles.label}>{message}</Text>
    </>
}


function App() {
    return <View style={styles.container}>
        <Welcome />
        <Welcome message="Hello React Native!"/>

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