import { Text, View, StyleSheet } from "react-native";



function App() {
    return <View style={styles.container}>
        <Text style={styles.label}>Welcome to React Native!</Text>
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
        fontSize:20,
        fontWeight:'bold',
        color:'blue'
    }
})