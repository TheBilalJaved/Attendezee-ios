import React, { useState ,useEffect} from 'react'
import { View, Text, ScrollView, StatusBar, TextInput, TouchableOpacity, ActivityIndicator, Image, SafeAreaView } from 'react-native'
import { LoginStyle } from './LoginStyle';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from "react-redux";
import { doLogin } from '../../store/actions/AuthAction';
import { useSelector } from 'react-redux';
import { notificationListner, requestUserPermission } from '../../componenets/Notification';





const THEME_COLOR = '#494446';

export default function Login({ navigation }) {
    useEffect(() => {
        requestUserPermission();
        notificationListner();
        
    }, [])


    const invalid_user = useSelector(state => state.AuthReducer.invalid_user_email_password);
    console.log(invalid_user)
    const [data, setData] = useState({
        secureTextEntry: true,
    });
    const [email_empty, setemail_empty] = useState('')


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()
    const douserlogin = (em, pass) => {
        setemail_empty('')
        if (em !== '' && pass !== '') {
            dispatch(doLogin(setloading, em, pass));
        } else {
            setemail_empty('Email or Password should not be empty')
        }

    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: THEME_COLOR
        }}>
            <SafeAreaView style={LoginStyle.root}>
                <StatusBar backgroundColor='#494446' barStyle="light-content" />
                <View

                    style={{ flex: 1 }}
                >
                    <View style={LoginStyle.logo_container}>
                        <Image style={{ width: 75, height: 75, opacity: 0.9, marginBottom: -8 }} source={require('../../assets/app_logo.png')} />
                        <Text style={{ color: 'white', fontSize: 28, letterSpacing: 2 }}>Attendezz.com</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={LoginStyle.input_container}>
                        <Text style={LoginStyle.input_lable}>Email</Text>
                        <View style={LoginStyle.action}>
                            <FontAwesome
                                name="user-o"
                                color="gray"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email Adress..."
                                placeholderTextColor="#666666"
                                style={LoginStyle.textInput}
                                autoCapitalize="none"
                                onChangeText={text => setemail(text)}
                            />
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                        </View>
                        <Text style={LoginStyle.input_lable}>Password</Text>
                        <View style={LoginStyle.action}>
                            <Feather
                                name="lock"
                                color='gray'
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                placeholderTextColor="#666666"
                                secureTextEntry={data.secureTextEntry}
                                style={LoginStyle.textInput}
                                autoCapitalize="none"
                                onChangeText={text => setpassword(text)}

                            />

                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
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
                        <Text style={{ color: '#FF6666', marginTop: 10 }}>{invalid_user}</Text>
                        <Text style={{ color: '#FF6666' }}>{email_empty}</Text>


                        <TouchableOpacity onPress={() => navigation.navigate('Forgetpassword')}>
                            <Text style={{ color: '#494446', marginTop: 15 }}>Forgot password?</Text>
                        </TouchableOpacity>
                        <View style={LoginStyle.button}>
                            {loading ?
                                <View

                                    style={LoginStyle.signIn}
                                ><LinearGradient
                                    colors={['#594449', '#494446']}
                                    style={LoginStyle.signIn}
                                >
                                        <ActivityIndicator size="small" color="white" />
                                    </LinearGradient>
                                </View>
                                :
                                <TouchableOpacity
                                    onPress={() => douserlogin(email, password)}
                                    style={LoginStyle.signIn}
                                ><LinearGradient
                                    colors={['#594449', '#494446']}
                                    style={LoginStyle.signIn}
                                >
                                        <Text style={LoginStyle.textSign}
                                        >Log In</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            }


                        </View>
                    </Animatable.View>
                </View>
            </SafeAreaView>

        </SafeAreaView>

    )
}
