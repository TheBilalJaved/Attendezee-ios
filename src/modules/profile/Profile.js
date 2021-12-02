import React, { useState } from 'react'
import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ProfileStyle } from './ProfileStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { doLogout } from '../../store/actions/AuthAction';
import { useSelector } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';

import Menu, {

    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';


const THEME_COLOR = '#494446';

export default function Profile({ navigation }) {

    const [isopen, setisopen] = useState(false)
    const dispatch = useDispatch()
    const user_data = useSelector(state => state.AuthReducer.data)
    const profilepic = useSelector(state => state.AuthReducer.profileimage)
    const month = ['index', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const logout = () => {
        dispatch(doLogout())
    }









    const onOptionSelect = (value) => {
        setisopen(false)
    }
    const onBackdropPress = () => {
        setisopen(false)
    }
    const onTriggerPress = () => {
        setisopen(true)
    }
    const triggerStyles = {
        triggerText: {
            color: 'white',
        },
        triggerWrapper: {
            padding: 5,

        },
        triggerTouchable: {

            activeOpacity: 70,
        },
        TriggerTouchableComponent: TouchableOpacity,
    };
    const optionsStyles = {
        optionsContainer: {
            backgroundColor: 'white',
            padding: 8,
            marginTop: 35,
            width: 150,
            borderRadius: 10,
            shadowColor: "#939393",
            shadowOpacity: 0.8,
            shadowRadius: 5,
            shadowOffset: {
                height: 2,
                width: 2
            }
        },
        optionsWrapper: {
            backgroundColor: 'white',
        },
        optionWrapper: {
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: '#C8C8C8',
        },
        optionTouchable: {
            backgroundColor: 'white',

        },
        optionText: {
            color: 'black',
        },
    };
    const push_to_update_profile = () => {
        navigation.push('Update_profile');
        setisopen(false)
    }
    const push_to_update_password = () => {
        navigation.push('Update_password');
        setisopen(false)
    }
    const push_to_Feed_Back = () => {
        navigation.push('Feedback')
        setisopen(false)
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: THEME_COLOR
        }}>
            <SafeAreaView style={{ flex: 1 }}>


                <ScrollView style={ProfileStyle.root}>

                    <View style={ProfileStyle.userinfo}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Image style={{ height: 200, width: 350, position: 'absolute' }} source={require('../../assets/app_logo.png')} />

                            <View style={{ top: 10, position: 'absolute', flexDirection: 'row', width: '100%' }}>


                                <View style={{ position: 'absolute', right: 10 }}>
                                    <Menu opened={isopen}
                                        onBackdropPress={() => onBackdropPress()}
                                        onSelect={value => onOptionSelect(value)}>

                                        <MenuTrigger
                                            onPress={() => onTriggerPress()}
                                            customStyles={triggerStyles}
                                        >
                                            <Ionicons

                                                name="ellipsis-vertical"
                                                color="white"
                                                size={25} />
                                        </MenuTrigger>
                                        <MenuOptions customStyles={optionsStyles}>
                                            <MenuOption value={1} onSelect={push_to_update_profile} text='Update Profile' >
                                            </MenuOption>
                                            <MenuOption value={2} onSelect={push_to_update_password} >
                                                <Text style={{ color: 'black' }}>Update Password</Text>
                                            </MenuOption>
                                            <MenuOption value={3} onSelect={push_to_Feed_Back} >
                                                <Text style={{ color: 'black' }}>Feed Back</Text>
                                            </MenuOption>
                                            <MenuOption value={4} onSelect={logout} >
                                                <Text style={{ color: 'black' }}>Logout</Text>
                                            </MenuOption>

                                        </MenuOptions>

                                    </Menu>

                                </View>
                            </View>
                        </View>


                    </View>
                    {/* '#FFDF76' */}
                    <View style={{ height: '100%', backgroundColor: '#FFDF76', }}>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 45 }}>
                            <Text style={{ fontSize: 30, fontWeight: '700', textTransform: 'capitalize' }}>{user_data.user_first_name}</Text>
                            <Text style={{ textTransform: 'capitalize' }}>{user_data.designation}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', height: 300 }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ height: 300, justifyContent: 'space-between', alignItems: 'flex-end' }}>

                                    <View style={{ marginTop: 50, alignItems: 'flex-end' }}>

                                        <Text style={{ fontWeight: '700', fontSize: 16 }}>Employee ID</Text>
                                        <Text>{user_data.user_id}</Text>
                                    </View>
                                    <View style={{ marginBottom: 20, alignItems: 'flex-end' }}>
                                        <Text style={{ fontWeight: '700', fontSize: 16 }}>Date-Of-Join</Text>
                                        <Text>{user_data.user_join_date.slice(8, 10)}-{month[parseInt(user_data.user_join_date.slice(5, 7))]}-{user_data.user_join_date.slice(0, 4)}</Text>
                                        {/* user_id":"1004 */}
                                    </View>

                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>


                                <QRCode
                                    value={user_data.user_id}
                                    size={90}
                                // backgroundColor='#FFDF76'
                                // color='white'

                                />

                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ height: 300, justifyContent: 'space-between' }}>

                                    <View style={{ marginTop: 50 }}>

                                        <Text style={{ fontWeight: '700', fontSize: 16 }}>DOB</Text>
                                        <Text>{user_data.user_dob.slice(8, 10)}-{month[parseInt(user_data.user_dob.slice(5, 7))]}-{user_data.user_dob.slice(0, 4)}</Text>
                                    </View>
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ fontWeight: '700', fontSize: 16 }}>Phone</Text>
                                        <Text>{user_data.user_phone}</Text>

                                    </View>


                                </View>
                            </View>

                        </View>


                        <View style={{ marginTop: 10, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '700', fontSize: 22 }}>Email</Text>
                            <Text>{user_data.user_email}</Text>

                        </View>
                        <View style={{ position: 'absolute', bottom: 0, marginBottom: 70, height: 70, width: "100%", backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', paddingBottom: 5, }}>info@cgit.pk</Text>
                            <Text style={{ color: 'white' }}>Powered by:Attendezz.com</Text>
                        </View>

                    </View>

                    <View style={{ position: 'absolute', width: '100%', alignItems: 'center', marginTop: 110 }}>

                        <Image style={ProfileStyle.user_pic} source={{
                            uri: `${profilepic}`,
                        }} />
                    </View>


                </ScrollView>

            </SafeAreaView>
        </SafeAreaView>
    )
}
