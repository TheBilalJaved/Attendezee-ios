import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid, SafeAreaView } from 'react-native';
import { UpdateProfileStyle } from "./UpdateProfileStyle"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getuserfromstorage, updateuser, uploadImage } from '../../store/actions/AuthAction';
import ImagePicker from 'react-native-image-crop-picker';
import AwesomeAlert from 'react-native-awesome-alerts';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Toast from 'react-native-simple-toast';

const THEME_COLOR = '#494446';

export default function UpdateProfile() {
     const user_info = useSelector(state => state.AuthReducer.data)
     const profilepic = useSelector(state => state.AuthReducer.profileimage)
     // const message = useSelector(state => state.AuthReducer.UPmessage)
     // console.log(message)
     const [firstname, setfirstname] = useState(user_info.user_first_name)
     const [lastname, setlastname] = useState(user_info.user_last_name)
     const [phone, setphone] = useState(user_info.user_phone)
     const [adress, setadress] = useState(user_info.user_address)
     const [dob, setdob] = useState(user_info.user_dob)
     const [showAlert, setshowAlert] = useState(false)
     const [UpdtaeMessage, setUpdtaeMessage] = useState('')
     const [showdate, setshowdate] = useState(false)
     const dispatch = useDispatch()
     const updateuserdata = () => {
          dispatch(updateuser(setUpdtaeMessage, setshowAlert, setloading, firstname, lastname, phone, adress, dob));
     }
     const [loading, setloading] = useState(false)

     const [image, setimage] = useState(profilepic)



     const selectimage = async () => {
          try {
               ImagePicker.openPicker({
                    width: 300,
                    height: 300,
                    includeBase64: true,
                    cropping: true
               }).then(image => {
                    try {
                         // console.log(image);
                         console.log(image.size)
                         if (image.size <= 200000) {
                              if (image.mime == 'image/jpeg' || image.mime == 'image/jpg' || image.mime == 'image/png' || image.mime == 'image/gif') {
                                   setimage(image.path);
                                   dispatch(uploadImage(image.data))
                              } else {

                                   Toast.show('Image format should be JPG,JPEG,PNG,gif', Toast.LONG);
                              }

                         } else {

                              Toast.show('Image size must be less than 2 MB', Toast.LONG);

                         }
                    } catch (error) {
                         console.log(error)
                    }

               });

          } catch (error) {
               console.log(error)
          }

     }
     const Confirm = (date) => {

          const dateString = JSON.stringify(date)
          console.log(dateString)
          setdob((dateString.slice(1, 11)));
          setshowdate(false)
     }




     return (
          <SafeAreaView style={{
               flex: 1,
               backgroundColor: THEME_COLOR
          }}>
               <SafeAreaView style={{ flex: 1 }}>

                    <ScrollView style={UpdateProfileStyle.root}>

                         <View style={UpdateProfileStyle.user_pic_container}>
                              <TouchableOpacity onPress={selectimage}>
                                   <Image style={UpdateProfileStyle.userpic} source={{
                                        uri: `${image}`,
                                   }}
                                   />
                              </TouchableOpacity>

                         </View>
                         <View style={UpdateProfileStyle.input_container}>
                              <View style={UpdateProfileStyle.email_info}>
                                   <View style={UpdateProfileStyle.info_heading}>
                                        <Text style={{ color: 'gray', fontSize: 16 }} >First Name</Text>
                                   </View>
                                   <View >
                                        <TextInput style={UpdateProfileStyle.textinput} value={firstname} onChangeText={text => setfirstname(text)} />
                                   </View>
                              </View>

                              <View style={UpdateProfileStyle.email_info}>
                                   <View style={UpdateProfileStyle.info_heading}>
                                        <Text style={{ color: 'gray', fontSize: 16 }} >Last Name</Text>
                                   </View>
                                   <View >
                                        <TextInput style={UpdateProfileStyle.textinput} value={lastname} onChangeText={text => setlastname(text)} />
                                   </View>
                              </View>

                              <View style={UpdateProfileStyle.email_info}>
                                   <View style={UpdateProfileStyle.info_heading}>
                                        <Text style={{ color: 'gray', fontSize: 16 }} >Phone</Text>
                                   </View>
                                   <View >
                                        <TextInput style={UpdateProfileStyle.textinput} value={phone} onChangeText={text => setphone(text)} />
                                   </View>
                              </View>

                              <View style={UpdateProfileStyle.email_info}>
                                   <View style={UpdateProfileStyle.info_heading}>
                                        <Text style={{ color: 'gray', fontSize: 16 }} >Address</Text>
                                   </View>
                                   <View >
                                        <TextInput style={UpdateProfileStyle.textinput} value={adress} onChangeText={text => setadress(text)} />
                                   </View>
                              </View>

                              <View style={UpdateProfileStyle.email_info}>
                                   <View style={UpdateProfileStyle.info_heading}>
                                        <Text style={{ color: 'gray', fontSize: 16 }} >DOB</Text>
                                   </View>
                                   <TouchableOpacity
                                        onPress={() => setshowdate(true)}
                                        style={{
                                             flexDirection: 'row',

                                             borderColor: 'gray',

                                             alignItems: 'center',

                                        }}>


                                        <Text style={{ width: 200, fontSize: 18, marginLeft: 5 }}>{dob}</Text>
                                   </TouchableOpacity>
                                   <DateTimePickerModal
                                        isVisible={showdate}
                                        mode="date"

                                        onConfirm={Confirm}
                                        onCancel={() => setshowdate(false)}
                                   />
                              </View>
                              {/* <Text style={{ color: '#4FD369' }}>{message}</Text> */}
                              {loading ?
                                   <View><ActivityIndicator style={UpdateProfileStyle.btn} size="small" color="white" /></View>
                                   :
                                   <TouchableOpacity onPress={updateuserdata} style={UpdateProfileStyle.btn}><Text style={{ color: 'white', fontSize: 16 }}>Update Profile</Text></TouchableOpacity>
                              }
                              <AwesomeAlert
                                   show={showAlert}
                                   showProgress={false}
                                   title="Update Profile"
                                   message={UpdtaeMessage}
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
