import React from 'react'
import { View, Text,Image } from 'react-native'
import LottieView from 'lottie-react-native';

export default function Splash() {
    return (
        <View style={{flex:1}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center' , backgroundColor:'#494446'}}>
            
             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <Image style={{height:90,width:90}} source={require("../assets/app_logo.png")}/>
                   <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>A T T E N D E Z Z</Text>
             </View>
           <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
           <LottieView
            source={require('../assets/scanner.json')} 
            autoPlay loop
            style={{height:200,width:200}}
            />
               </View>
             <View style={{flex:0.6}}></View>
             <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
               <Image style={{height:50,width:50,marginBottom:10}} source={require('../assets/cgit.png')}/>
              
             </View>
             <Text style={{fontSize:13,color:'white'}}>Powered By </Text>
             <Text style={{fontSize:13,color:'white',marginBottom:'10%'}}>Convert Generation Information Technology</Text>
            </View>
            </View>
    )
}
