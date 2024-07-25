import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'


//component to get input from the user
const ReadText = props => {
    const [value, setValue] = useState("Default text")
    const [no, onChangeNumber] = useState(0)

    return <>
        <TextInput style={styles.input} value={value} onChangeText={setValue} />
        <Button title='Read Text' onPress={() => {
            Alert.alert(value)
        }} />

        <TextInput value={no} keyboardType="numeric" style={styles.input} placeholder='Type your no' onChangeText={onChangeNumber} />
        <Button title='Read Text' onPress={() => {
            Alert.alert(no.toString())
        }} />
    </>

}


function App() {
    return <View style={styles.container}>
        <ReadText />
    </View>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});

