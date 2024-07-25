import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Alert, TouchableHighlight, SectionList } from "react-native";

//data:
const COURSELIST = [
    {
        title: 'User Interface',
        data: [
            'HTML',
            'CSS',
            'Android',
            'IOS',
            'Javascript'
        ]
    },
    {
        title: 'Backend',
        data: [
            'JAVA',
            'C#',
            'Microservices',
            'Python',
            'Javascript'
        ]

    },
]
const Course = props => {

    return <View>
        <SectionList
            sections={COURSELIST}
            renderItem={({ item }) => {
                return <Text>{item}</Text>
            }}
            renderSectionHeader={({ section: { title } }) => {
                return <Text style={styles.lable}>{title}</Text>
            }}
            keyExtractor={(item, index) => {
                return item + index
            }}

        />
    </View>
}
function App() {
    return <View style={styles.container}>
        <Course />
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

