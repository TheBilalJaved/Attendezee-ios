import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function Users({ route, navigation }) {

    const { location } = route.params;
    console.log(location)

    return (
        <View style={styles.root}>
            <ScrollView style={{marginHorizontal:'5%',width:'100%'}}>
            {location.map((item, index) => (
                <View key={index} style={styles.cardContainer}>
                <Image style={styles.cardPic} source={require('../../assets/app_logo.png')} />
                <View style={styles.textContainer}><Text style={{ fontSize: 15, fontWeight: '700',paddingBottom:5 }}>{item.empName}</Text><Text> ID# {item.uid}</Text></View>
            </View>
    ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    cardContainer: {
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
        marginTop: 10,
        backgroundColor: 'white',
        height: 90,
        padding: 15,
        flexDirection: 'row',
        width: '90%',
        borderRadius: 15,
        elevation: 1,
    },
    cardPic: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2
    },
    textContainer: {
        paddingLeft: 20,
        paddingTop:10,
    }
})