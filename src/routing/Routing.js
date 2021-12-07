import React, { useEffect, useState } from 'react'
import RootstackScreen from './Rootstack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import Splash from '../componenets/Splash';
import { getuserfromstorage } from '../store/actions/AuthAction';
import { View } from 'react-native'
import { MenuProvider } from 'react-native-popup-menu';
import StackScreen from './StackScreens';
import NoInternet from '../modules/no internet/NoInternet';

export function Routing() {
  const dispatch = useDispatch()


  const usertoken = useSelector(state => state.AuthReducer.token)
  const loading1 = useSelector(state => state.AuthReducer.loading)
  const offline = useSelector(state => state.AuthReducer.offline)






  useEffect(() => {

    const getdata = async () => {
      dispatch(getuserfromstorage())
    }
    getdata();
  }, [])


  if (loading1) {
    return (
      <View style={{ flex: 1 }}>
        <Splash />
      </View>
    )
  } else {

    return (
      <MenuProvider >
        {offline ?
          <View style={{ flex: 1 }}>
            <NoInternet />
          </View>
          :
          <NavigationContainer>


            {usertoken !== null ? (
              <StackScreen />
            )
              :
              <RootstackScreen />
            }


          </NavigationContainer>}

      </MenuProvider>

    );
  }

}