import React, { useEffect,useState } from 'react'
import RootstackScreen from './Rootstack';
import TabScreen from './Tabscreen';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import Splash from '../componenets/Splash';
import { getuserfromstorage } from '../store/actions/AuthAction';
import {View} from 'react-native'
import { MenuProvider } from 'react-native-popup-menu';

export  function Routing() {
  const dispatch = useDispatch()
  
   
  const usertoken=useSelector(state => state.AuthReducer.token)
  const loading1=useSelector(state => state.AuthReducer.loading)
  
  console.log(loading1)
  const [unmounted, setunmounted] = useState(false)




  useEffect(() => {
    
    const getdata=async()=> {
      if(unmounted == false){
       dispatch(getuserfromstorage(unmounted)) 
    }
    }
   
    getdata();
    return ()=>{
      console.log('unmountes set to true')
      setunmounted(true)
    }
  }, [])
   

  if (loading1) {
    return(
      <View style={{flex:1}}>
      <Splash/>
      </View>
    );
  }else{

    return (
      <MenuProvider >
      <NavigationContainer>
        
        
        { usertoken !== null ? (
          <TabScreen/>
         )
       :
         <RootstackScreen/>
          }
      
      
     </NavigationContainer>
     </MenuProvider>
   
  );
  }
   
}
