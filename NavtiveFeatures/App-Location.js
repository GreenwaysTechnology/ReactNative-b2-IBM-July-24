import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

const MyLocation = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    //write code to get current locaiton
    async function getLocation() {
        //request device permisison
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg("Permission Denined to access location")
            return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLocation(location)

    }

    useEffect(() => {
        getLocation()
    }, [])

    let text = 'Location is loading...'

    if (errorMsg) {
        text = errorMsg
    } else if (location) {
        text = JSON.stringify(location)
    }
    return <View>
        <Text style={{ fontSize: 20, color: 'blue' }}>{text}</Text>
    </View>

}


function App() {
    return <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
        <MyLocation></MyLocation>
    </View>
}

export default App;