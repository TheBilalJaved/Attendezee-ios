import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import UpdateProfile from '../modules/update profile/UpdateProfile'
import Feedback from '../modules/feedback/Feedback';
import Maps from '../modules/map/Maps'
import Users from '../modules/map/Users'
import UserMap from '../modules/map/UserMap'
import Tabscreen from './Tabscreen'
import UpdatePassword from '../modules/reset password/UpdatePassword'
const Stack = createStackNavigator();


const StackScreen = () => (
    <Stack.Navigator  >
        <Stack.Screen options={{ headerShown: false }} name="home" component={Tabscreen} />
        <Stack.Screen
            options={{
                title: 'Update Profile', headerStyle: { backgroundColor: '#494446', }, headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name="Update_profile" component={UpdateProfile} />
        <Stack.Screen
            options={{
                title: 'Feedback',
                headerStyle: {
                    backgroundColor: '#494446',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name="Feedback" component={Feedback} />
        <Stack.Screen
            options={{
                title: 'Maps', headerStyle: { backgroundColor: '#494446', },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name="Maps" component={Maps} />
        <Stack.Screen
            options={{
                title: 'Employee List', headerStyle: { backgroundColor: '#494446', },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name="users" component={Users} />
        <Stack.Screen
            options={({ route, navigation })=>({
                title: `${(route.params.item.UserFname).toUpperCase()}`, headerStyle: { backgroundColor: '#494446', },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })}
            name="usermap" component={UserMap} />
        <Stack.Screen
            options={{
                title: 'Update Password',
                headerStyle: {
                    backgroundColor: '#494446',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name="Update_password" component={UpdatePassword} />


    </Stack.Navigator>
);

export default StackScreen;