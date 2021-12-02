import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import database from '@react-native-firebase/database';
import { NavigationContainer } from '@react-navigation/native';

export default function Maps({navigation}) {


    const [location, setlocation] = useState([])
    const locations=[]

    const getdatabase = async () => {
        database()
            .ref('Location')
            .once('value')
            .then(snapshot => {
               
                // setlocation(snapshot.val())
                // console.log(snapshot.val())
                let data=[]
                {Object.values(snapshot.val()).forEach(val =>{
                    // console.log(val)
                    data.push(val)
                    } )}
                    setlocation(data)
            });
       
    }
    useEffect(() => {
        getdatabase()
    }, [])
    
 
  console.log(location)
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 31.4514665,
                    longitude: 73.1113669,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {location.map((val,index)=>(
                    <Marker
                     key={index}
                    coordinate={{ latitude: val.lat, longitude: val.lng }}
                    style={{ height: 50, width: 120 }}

                    title={`${val.empName}`}
                    description={`${val.date}`}
                />
                ))}
               
                
            </MapView>
            <View style={styles.btnContainer}> 
            <TouchableOpacity  style={styles.btn}><Text style={{color:'white'}}>Reload</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('User',{location})} style={styles.btn}><Text style={{color:'white'}}>Employee</Text></TouchableOpacity>
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
        borderRadius:10,

    },
    btnContainer:{
flexDirection:'row',
justifyContent:'space-between'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1
    },
})