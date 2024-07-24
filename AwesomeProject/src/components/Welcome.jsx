import { StyleSheet, Text } from "react-native"

const Welcome = ({ message = 'Welcome to React Native' }) => {
    return <>
        <Text style={styles.label}>{message}</Text>
    </>
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    }
})
export { Welcome }