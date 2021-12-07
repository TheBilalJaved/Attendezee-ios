import React,{useState} from 'react'
import { View, Text ,Image,TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import Splash from '../../componenets/Splash'
import {  offfline } from '../../store/actions/AuthAction'

export default function NoInternet() {
     
     const [loading, setloading] = useState(false)


    const dispatch = useDispatch()
const reload=async()=>{
   
   
    dispatch(offfline(setloading))
   
 
    
}

    return (
        
        <View style={{flex:1,backgroundColor:'white'}}> 
        {loading ? <Splash/> :
           <>
        <View style={{ flex:2,marginTop:'20%',width:'100%',height:'100%',alignItems:'center'}}>
           <Image style={{width:'100%',height:250,}} source={require('../../assets/offline.jpg')}/>
        </View>
        <View style={{flex:3}}>
         <View>
         <Text style={{alignSelf:'center',fontSize:30,color:'#ff3f34'}}>No connection...</Text>
         <Text style={{marginHorizontal:30,alignSelf:'center',fontSize:18,marginTop:'5%'}}>Opps.. its's seems you can't connect to our network.check your internet connection</Text>
         </View>
      
      
        <TouchableOpacity onPress={reload} style={{marginTop:'30%',height:60,width:'90%',backgroundColor:'#ff3f34',marginHorizontal:'5%',borderRadius:15,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:20,color:'white'}}>Reload App</Text></TouchableOpacity>
      
        </View>
        </>
        }
        </View>
    )
}