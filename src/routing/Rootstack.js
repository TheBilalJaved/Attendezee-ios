import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../modules/login/Login';
import Forgetpassword from '../modules/forgetpassword/Forgetpassword';
const RootStack = createStackNavigator();


const RootstackScreen = ({navigation}) => (
    <RootStack.Navigator  screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="Forgetpassword" component={Forgetpassword}/>
    </RootStack.Navigator>
);

export default RootstackScreen;