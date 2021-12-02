import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import { UpdatepasswordStyle } from './UdatepasswordStyle'
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { UpdateuserPassword } from '../../store/actions/AuthAction';
import { useSelector } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';


const THEME_COLOR = '#494446';

export default function UpdatePassword() {


    const oldpasswordincorrect = useSelector(state => state.AuthReducer.old_password_incorrect)
    const new_old_not_same = useSelector(state => state.AuthReducer.new_old_pass_wrong)


    const dispatch = useDispatch()
    const [oldpassword, setoldpassword] = useState('')
    const [newpassword, setnewpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')

    const [secureentry1, setsecureentry1] = useState(true)
    const [secureentry2, setsecureentry2] = useState(true)
    const [secureentry3, setsecureentry3] = useState(true)
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState('')
    const [showAlert, setshowAlert] = useState(false)
    const [AlertMessage, setAlertMessage] = useState('')

    const updateSecureTextEntry1 = () => {
        setsecureentry1(!secureentry1);
    }
    const updateSecureTextEntry2 = () => {
        setsecureentry2(!secureentry2);
    }
    const updateSecureTextEntry3 = () => {
        setsecureentry3(!secureentry3);
    }

    const onupdatepassword = async () => {
        setmessage("")
        if (oldpassword !== "" && newpassword !== "" && confirmpassword !== "") {
            dispatch(UpdateuserPassword(setshowAlert, setAlertMessage, setloading, oldpassword, newpassword, confirmpassword))
        } else {
            setmessage("All fields must be filled")

        }
        setoldpassword('')
        setnewpassword('')
        setconfirmpassword('')

    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: THEME_COLOR
        }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 1 }}>
                    {/* <View style={{ paddingTop: 50, paddingBottom: 50, backgroundColor: '#494446', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Update Password</Text>
            </View> */}
                    <View style={{ flex: 3 }}>
                        <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                            <Text style={UpdatepasswordStyle.input_lable}>Old Password</Text>
                            <View style={UpdatepasswordStyle.action}>
                                <Feather
                                    name="lock"
                                    color='gray'
                                    size={20}
                                />
                                <TextInput
                                    value={oldpassword}
                                    placeholder="Old Password"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={secureentry1}
                                    style={UpdatepasswordStyle.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => setoldpassword(text)}
                                />
                                <TouchableOpacity
                                    onPress={updateSecureTextEntry1}
                                >
                                    {secureentry1 ?
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ color: '#FF6666', marginLeft: '6%' }}>{oldpasswordincorrect}</Text>

                        <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                            <Text style={UpdatepasswordStyle.input_lable}>New Password</Text>
                            <View style={UpdatepasswordStyle.action}>
                                <Feather
                                    name="lock"
                                    color='gray'
                                    size={20}
                                />
                                <TextInput
                                    value={newpassword}
                                    placeholder="New Password"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={secureentry2}
                                    style={UpdatepasswordStyle.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => setnewpassword(text)}
                                />
                                <TouchableOpacity
                                    onPress={updateSecureTextEntry2}
                                >
                                    {secureentry2 ?
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                            <Text style={UpdatepasswordStyle.input_lable}>Confirm New Password</Text>
                            <View style={UpdatepasswordStyle.action}>
                                <Feather
                                    name="lock"
                                    color='gray'
                                    size={20}
                                />
                                <TextInput
                                    value={confirmpassword}
                                    placeholder="Confirm New Password"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={secureentry3}
                                    style={UpdatepasswordStyle.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(text) => setconfirmpassword(text)}
                                />
                                <TouchableOpacity
                                    onPress={updateSecureTextEntry3}
                                >
                                    {secureentry3 ?
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ color: '#FF6666', marginLeft: '6%' }}>{new_old_not_same}</Text>
                        <Text style={{ color: '#FF6666', marginLeft: '6%' }}>{message}</Text>



                        {loading ?
                            <View

                                style={[UpdatepasswordStyle.signIn, {
                                    backgroundColor: '#494446',
                                    marginTop: "15%",
                                    marginBottom: 60,
                                }]}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <ActivityIndicator size='small' color="white" />

                                </View>
                            </View>
                            :
                            <TouchableOpacity
                                onPress={onupdatepassword}
                                style={[UpdatepasswordStyle.signIn, {

                                    backgroundColor: '#494446',
                                    marginTop: "15%",
                                    marginBottom: 60,
                                }]}
                            >
                                <View style={{ flexDirection: 'row' }}>

                                    <Text style={[UpdatepasswordStyle.textSign, {
                                        color: 'white',
                                        paddingLeft: 15
                                    }]}>Update Password</Text>
                                </View>
                            </TouchableOpacity>

                        }
                        <AwesomeAlert
                            show={showAlert}
                            showProgress={false}
                            title="Update Password"
                            message={AlertMessage}
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}

                            showConfirmButton={true}
                            contentContainerStyle={{
                                marginRight: '5%',
                                marginLeft: '5%',
                                width: 270,
                                height: 170,
                                borderRadius: 15
                            }}
                            confirmButtonStyle={{
                                width: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyContent: 'center',



                            }}
                            confirmText="ok"
                            confirmButtonColor="green"
                            onConfirmPressed={() => setshowAlert(false)}

                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    )
}


