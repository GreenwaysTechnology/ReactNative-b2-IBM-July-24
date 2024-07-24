import { View, StyleSheet } from "react-native";
import { Welcome } from "./src/components";

function App() {
    return <View style={styles.container}>
        <Welcome />
        <Welcome message="Hello React Native , How are you?" />

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