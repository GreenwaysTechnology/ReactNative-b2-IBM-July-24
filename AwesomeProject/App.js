import 'react-native-gesture-handler';

import {View} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';

const Drawer = createDrawerNavigator();

const Feed = () => {
    return <View style={{ flex: 1 }}>
        <Text>Feed </Text>
    </View>
}

const Article = () => {
    return <View style={{ flex: 1 }}>
        <Text>Article </Text>
    </View>
}
function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}
function App() {
    return <NavigationContainer>
        <MyDrawer />

    </NavigationContainer>

}

export default App;