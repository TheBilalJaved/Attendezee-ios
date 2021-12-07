import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import database from '@react-native-firebase/database';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment"

export default function Maps({ navigation }) {


    const [location, setlocation] = useState([])


    const getdatabase = async () => {
        const BusinessID = await AsyncStorage.getItem('BussinessID')
        database()
            .ref(`7/CurrentLocation`)
            .once('value')
            .then(snapshot => {
                let data = []
                {
                    Object.values(snapshot.val()).forEach(val => {
                        console.log(val)
                        data.push(val)
                    })
                }
                setlocation(data)
            });

    }
    useEffect(() => {
        getdatabase()
    }, [])


    console.log(location)
    return (
        <View style={styles.container}>
            {location[0] &&
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: location[0]?.latitude,
                        longitude: location[0]?.longitude,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.0001,
                    }}
                >
                    {location.map((val, index) => {

                        const time = moment(val.time).format("hh:mm A")
                        console.log(time)
                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude: val.latitude, longitude: val.longitude }}
                             

                                title={`${val.UserFname}`}
                                description={`${time}`}
                            >
                                <View style={{alignSelf:"center"}}>
                                    <Image source={{ uri: `${val.UserPic}` }} style={{ height: 50, width: 50,borderRadius:50/2 }} />


                                </View>
                            </Marker>
                        )
                    })}


                </MapView>
            }
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={getdatabase} style={styles.btn}><Text style={{ color: 'white' }}>Reload</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('users', { location })} style={styles.btn}><Text style={{ color: 'white' }}>Employee List</Text></TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        height: 35,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494446',
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,

    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1
    },
})