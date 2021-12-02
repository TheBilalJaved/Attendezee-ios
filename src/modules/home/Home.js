import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Linking, Modal, Dimensions, StatusBar, RefreshControl, SafeAreaView ,ActivityIndicator} from 'react-native'
import { HomeStyle } from './HomeStyle';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { SliderBox } from "react-native-image-slider-box";
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { AttendanceByDay, bussiness_rules, getattendance } from '../../store/actions/AuthAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from '@react-native-community/geolocation';
import { request, requestMultiple, checkMultiple, PERMISSIONS } from 'react-native-permissions';

import AwesomeAlert from 'react-native-awesome-alerts';
import RNSettings from 'react-native-settings';


import Menu, {
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { doLogout } from '../../store/actions/AuthAction';
import { notificationListner, requestUserPermission } from '../../componenets/Notification';
import messaging from '@react-native-firebase/messaging';

const THEME_COLOR = '#494446';


export default function Home({ navigation }) {
    const [potrairt, setpotrairt] = useState(false)
    const window = Dimensions.get("window").width;
    const width = (window / 100) * 90
    // Dimensions.addEventListener('change', () => {
    //     getpotrait()
    // })

    const getpotrait = () => {
        setpotrairt(!potrairt)
    }
    // const landscape = Dimensions.get("window").width >= Dimensions.get("window").height
    // console.log(potrairt)
    const user_data = useSelector(state => state.AuthReducer.data)
    const profilepic = useSelector(state => state.AuthReducer.profileimage)

    const getbussiness = useSelector(state => state.AuthReducer.user_bussines)

    const Rules = useSelector(state => state.AuthReducer.business_rules)
    const AttendanceByoneDay = useSelector(state => state.AuthReducer.todayAttendance)


    const [shift, setshift] = useState('')
    const [alert_color, setalert_color] = useState('')
    const [lat, setlat] = useState('')
    const [imagesurl, setimagesurl] = useState([])
    const [lon, setlon] = useState('')
    const [image_path, setimage_path] = useState('')
    const [open, setOpen] = useState(false);

    const [selectbussiness, setselectbussiness] = useState('')
    const [showAlert, setshowAlert] = useState(false)
    const [alert_message, setalert_message] = useState('')
    const [refreshing, setrefreshing] = useState(false)
    const [isopen, setisopen] = useState(false)
    const userbussines_data = []
    const [scanner, setscanner] = useState(false)
    const [ModalActive, setModalActive] = useState(false)

    getbussiness.map((item, index) => {
        const obj = { label: `${item.business_name}`, value: `${item.business_id}` }
        userbussines_data.push(obj)
    })


    const [items, setItems] = useState(userbussines_data);
    const [value, setValue] = useState();

    useEffect(() => {
        let loading = false
        const promotion = async () => {
            try {
                if (!loading) {
                    let source = axios.CancelToken.source();
                    const res = await axios.get("https://www.attendezz.com/dashboard/api/index.php?action=promotion", { cancelToken: source.token })
                    setimage_path(res.data.image_path)
                    setimagesurl(res.data.promotion_data)
                }
            } catch (error) {
                console.log(error)
            }

        }
        promotion();
        return () => {
            loading = true;
        }
    }, [])
    const images = []
    const imagesurls = []
    if (image_path !== '') {
        imagesurl.map((item) => {
            // console.log(item)
            return (
                images.push(`${image_path}${item.pic}`),
                imagesurls.push(`${item.link}`)
            )
        }
        )
    }
    const dispatch = useDispatch()
    useEffect(() => {
        const callForBussiness = async () => {
            dispatch(AttendanceByDay(value));
            dispatch(bussiness_rules(value));
        }
        callForBussiness()

    }, [value])
    useEffect(() => {
        requestUserPermission();
        notificationListner();
        messaging().getToken().then(token => {
            console.log(token)
        })
    }, [])

    const onSuccess = async (e) => {
        const qrResult = e.data.split(/[|,]/)
        console.log(qrResult)
        if (qrResult[0] == value) {
            dispatch(getattendance(setModalActive,setalert_color, lat, lon, setalert_message, setshowAlert, value, shift))
            setscanner(false)
        } else {
            setshowAlert(true)
            setalert_message('Please scan the correct qr code')
            setalert_color('#5E0D14')
            setscanner(false)
        }


    }
    const attendance = async (btn, bussiness_id) => {
        setselectbussiness('')
        console.log(bussiness_id)
        if (bussiness_id !== '') {

            checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]).then((statuses) => {

                if (statuses[PERMISSIONS.IOS.CAMERA] == "granted" && statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == "granted") {
                    console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
                    setscanner(true)
                } else {
                    requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]).then((statuses) => {
                        console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
                        console.log('Camera', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);

                    });
                }

            });


            Geolocation.getCurrentPosition((position) => {
                setlat(position.coords.latitude);
                setlon(position.coords.longitude)
                // console.log(position)
            }, (error) => {
                if (error.code == 2) {

                    // RNSettings.openSetting(RNSettings.LOCATION_SETTING).then(
                    //     result => {
                    //         if (result === RNSettings.ENABLED) {
                    //             // console.log('location is enabled');
                    //         }
                    //     },
                    // );
                    try {
                        Linking.openURL('App-Prefs:LOCATION_SERVICES')
                    } catch (error) {
                        console.log(error)
                    }

                }
            }
            )

            setshift(btn)
        } else {
            setselectbussiness('Please select business first')
        }


    }



    const logout = () => {
        dispatch(doLogout())
    }


    const onOptionSelect = () => {
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
            postion: "absolute",
            Right: 0

        },
        triggerTouchable: {

            activeOpacity: 70,
            postion: "absolute",
            Left: 0,
            marginLeft: 100
        },
        TriggerTouchableComponent: Ionicons,
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
    const updateProfile = () => {
        setisopen(false)
        navigation.navigate('Update_profile')
    }
    const onRefresh =() => {
        setrefreshing(true);
        setTimeout(() => {
            dispatch(AttendanceByDay(value));
            setrefreshing(false)
        }, 3000); 
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: THEME_COLOR
        }}>
            <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
                <StatusBar translucent backgroundColor='#494446' barStyle="light-content" />
                <ScrollView nestedScrollEnabled={true} style={HomeStyle.root} 
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />}
            >
                {/* <ScrollView nestedScrollEnabled={true} style={HomeStyle.root}> */}

                    <View style={HomeStyle.logo_container}>

                        <View style={HomeStyle.image_container}>

                            <Image style={HomeStyle.user_pic} source={{
                                uri: `${profilepic}`,
                            }} />
                            <View style={HomeStyle.useinfo_text}>
                                <Text style={HomeStyle.user_firstname}>{user_data.user_first_name}</Text>
                                <Text style={HomeStyle.designation_id}>{user_data.designation}</Text>
                                <Text style={HomeStyle.designation_id}>ID# {user_data.user_id}</Text>
                            </View>
                            {/* Eclips button */}
                            <View style={HomeStyle.eclips}>
                                <View >
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
                                            <MenuOption value={1} onSelect={updateProfile} text='Update Profile' >
                                            </MenuOption>
                                            <MenuOption value={2} onSelect={logout} >
                                                <Text style={{ color: 'black' }}>Logout</Text>
                                            </MenuOption>

                                        </MenuOptions>

                                    </Menu>
                                </View>
                            </View>
                        </View>



                    </View>


                    {/* DropDownPicker */}
                    <View style={HomeStyle.dropdown}>

                        <DropDownPicker
                            placeholder="Select Business"
                            open={open}
                            listMode="SCROLLVIEW"
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            zIndex={1000}


                        />
                        {value == '' ? <Text style={{ color: '#FF6666', marginTop: 5, marginBottom: 0 }}>{selectbussiness}</Text> : <Text></Text>}

                    </View>
                    {/* button container */}


                    <View style={HomeStyle.checkin_container}>
                        <TouchableOpacity style={HomeStyle.check_btn} onPress={() => attendance('Start_shift', value)} >
                            <Feather
                                style={{ marginBottom: 5 }}
                                name="log-in"
                                color="black"
                                size={25} />
                            <Text style={HomeStyle.btn_text}>Check In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={HomeStyle.check_btn} onPress={() => attendance('End_shift', value)}>
                            <Feather
                                style={{ marginBottom: 5 }}
                                name="log-out"
                                color="black"
                                size={25} />
                            <Text style={HomeStyle.btn_text}>Check out</Text>
                        </TouchableOpacity>




                        <TouchableOpacity style={HomeStyle.check_btn} onPress={() => attendance('Start_break', value)}>
                            <Feather
                                style={{ marginBottom: 5 }}
                                name="bell"
                                color="black"
                                size={25} />
                            <Text style={HomeStyle.btn_text}>Break Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={HomeStyle.breakend} onPress={() => attendance('End_break', value)}>
                            <Feather
                                style={{ marginBottom: 5 }}
                                name="bell-off"
                                color="black"
                                size={25} />
                            <Text style={HomeStyle.btn_text}>Break End</Text>
                        </TouchableOpacity>


                    </View>

                    <Modal
                        style={HomeStyle.modalstyle}

                        transparent={true}
                        visible={scanner}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setscanner(!scanner);
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                            <QRCodeScanner
                                fadeIn={false}

                                permissionDialogMessage='Need Camera Permission '
                                showMarker={true}
                                onRead={onSuccess}

                                topContent={
                                    <View style={{ backgroundColor: '#494446' }}>

                                    </View>
                                }
                                bottomContent={
                                    <TouchableOpacity onPress={() => setscanner(false)} style={HomeStyle.scannerbtn}>
                                        <LinearGradient style={HomeStyle.scannerbtn_text}
                                            colors={['#7C131A', '#5E0D14']}
                                        >
                                            <Text style={{ color: '#ffffff', fontSize: 16, letterSpacing: 2 }}>
                                                Close
                                            </Text></LinearGradient>
                                    </TouchableOpacity>
                                }
                            />
                        </View>

                    </Modal>
                    <Modal

                        animationType="slide"
                        transparent={true}
                        presentationStyle="overFullScreen"
                        visible={ModalActive}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalActive(!ModalActive);
                        }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', opacity: 0.6 }}>

                            <Text style={{ flex: 1, bottom: 10, color: 'white', fontSize: 25 }}>      </Text>

                        </View>
                        <View style={{ flex: 1, position: 'absolute', justifyContent: 'center', alignSelf: 'center', top: '45%' }}>
                            <ActivityIndicator color="white" size={50} />

                        </View>



                    </Modal>
                    {AttendanceByoneDay.map((item, index) => {
                        return (

                            <View style={HomeStyle.cardshadow_container} key={index} >
                                <View style={HomeStyle.card_container}>
                                    <View style={HomeStyle.card_date}>
                                        <Text style={HomeStyle.today_text} >Today Attendance</Text>
                                    </View>
                                    {
                                        item.shifts == item.shifts[0]
                                            ?
                                            <View style={HomeStyle.leave}>
                                                <Text style={HomeStyle.leave_text}>Time Off</Text>
                                            </View>
                                            : <View>
                                                <View style={HomeStyle.shiftcontainer} >
                                                    <View style={HomeStyle.shift_block}>
                                                        <Text style={HomeStyle.shift_heading}>Start Shift</Text>
                                                        <Text style={HomeStyle.shift_time}>{item.shifts.start_shift}</Text>
                                                    </View>
                                                    <View style={HomeStyle.shift_block}>
                                                        <Text style={HomeStyle.shift_heading}>End Shift</Text>
                                                        <Text style={HomeStyle.shift_time}>{item.shifts.end_shift}</Text>
                                                    </View>
                                                    <View style={HomeStyle.shift_block}>
                                                        <Text style={HomeStyle.shift_heading}>Start Break</Text>
                                                        <Text style={HomeStyle.shift_time}>{item.shifts.start_break}</Text>
                                                    </View>
                                                    <View style={HomeStyle.shift_block}>
                                                        <Text style={HomeStyle.shift_heading}>End Break</Text>
                                                        <Text style={HomeStyle.shift_time}>{item.shifts.end_break}</Text>
                                                    </View>

                                                </View>
                                                <View style={HomeStyle.hours_container}>

                                                    <View style={HomeStyle.total_hours_container}>
                                                        <Text style={HomeStyle.Hours_heading}>Total Hours</Text>
                                                        <Text style={HomeStyle.total_hours_text}>{item.shifts.totalHours}</Text>
                                                    </View>
                                                    <View style={HomeStyle.totalBreak_container}>
                                                        <Text style={HomeStyle.Hours_heading}>Total Break</Text>
                                                        <Text style={HomeStyle.total_hours_text}>{item.shifts.totalBreak}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                    }

                                </View>
                            </View>
                        )
                    })}
                    <View style={{
                        marginLeft: '5%',
                        marginRight: '5%',
                        borderRadius: 20,
                        marginTop: 10,
                        overflow: 'hidden'
                    }}>
                        <SliderBox
                            parentWidth={potrairt ? 400 : width}
                            images={images}
                            sliderBoxHeight={200}
                            activeOpacity={0.5}
                            dotColor="#FFFFFF"
                            inactiveDotColor="#90A4AE"
                            autoplay={true}
                            circleLoop={true}
                            onCurrentImagePressed={(index) => { Linking.openURL(`${imagesurls[index]} `) }}
                            resizeMethod={'resize'}
                            resizeMode={'stretch'}
                        />
                    </View>

                    <AwesomeAlert
                        show={showAlert}
                        showProgress={false}
                        title="Attendance"
                        message={alert_message}
                        // closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}

                        showConfirmButton={true}
                        contentContainerStyle={HomeStyle.contentContainer}
                        confirmButtonStyle={HomeStyle.Alertconfirmbtn}
                        confirmText="ok"
                        confirmButtonColor={alert_color}
                        onConfirmPressed={() => setshowAlert(false)}

                    />
                    <View style={HomeStyle.rules_container}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 18, width: 18, marginRight: 10 }} source={require('../../assets/rules.png')} />

                            <Text style={HomeStyle.rules_heading}>Bussiness Rules</Text>
                        </View>
                        {Rules.map((item, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', }}>
                                    <Image style={{ height: 8, width: 8, marginTop: 15, marginRight: 10 }} source={require('../../assets/dot.png')} />

                                    <Text style={HomeStyle.rules_text}>{item}</Text>
                                </View>
                            )

                        })}


                    </View>



                </ScrollView>
               <TouchableOpacity onPress={()=>navigation.navigate('Feedback')} style={{height:50,width:50,borderRadius:50/2,position:'absolute',bottom:8,right:10,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                   <Image style={{height:40,width:40}} source={require('../../assets/feedback.jpeg')}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate('Maps')} style={{height:50,width:50,borderRadius:50/2,position:'absolute',bottom:8,left:10,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                   <Image style={{height:40,width:40}} source={require('../../assets/feedback.jpeg')}/>
               </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}


