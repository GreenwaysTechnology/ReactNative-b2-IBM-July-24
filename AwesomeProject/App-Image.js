import { Image, StyleSheet, View } from "react-native";

const Picture = () => {

    return <View>
        <Image
            style={{ width: 50, height: 50 }}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
    </View>
}
function App() {
    return <View style={styles.container}>
        <Picture />
    </View>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lable: {
        marginLeft: 5,
        color: 'blue',
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 'bold',
        fontSize: 20
    }
})
