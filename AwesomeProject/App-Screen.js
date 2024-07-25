import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";//create 

//screen navigation: screen to screen.
//Create Stack Object
const Stack = createNativeStackNavigator()

//Component- Screen
const HomeScreen = props => {
    return <View style={styles.container}>
        <Text style={styles.label}>Home Screen</Text>
    </View>
}
const ProfileScreen = props => {
    return <View style={styles.container}>
        <Text style={styles.label}>Profile Screen</Text>
    </View>
}


function App() {
    return <NavigationContainer>
        {/* Stack Navigation */}
        <Stack.Navigator>
            {/* List of Screen */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
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