import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import { feedback } from '../../store/actions/AuthAction'
import { FeedbackStyle } from './FeedbackStyle'
import AwesomeAlert from 'react-native-awesome-alerts';


const THEME_COLOR = '#494446';

export default function Feedback() {
    const [feedtext, setfeedtext] = useState('')
    const [isempty, setisempty] = useState('')
    const [showAlert, setshowAlert] = useState(false)
    const [submitted, setsubmitted] = useState('')
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()
    const submitfeedback = () => {
        setisempty('')
        if (feedtext !== '') {
            dispatch(feedback(setloading, setsubmitted, setshowAlert, feedtext))
        } else {
            setisempty('Field could not be empty')
        }


    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: THEME_COLOR
        }}>
            <SafeAreaView style={FeedbackStyle.root}>
                <View style={FeedbackStyle.input_container}>
                    <Text style={FeedbackStyle.input_label}>Suggestion or Problem </Text>
                    <View style={FeedbackStyle.textinput}>
                        <TextInput style={{ color: 'black', padding: 8 }} multiline={true} onChangeText={text => setfeedtext(text)} placeholder='Describe your suggestion or problem...' />
                    </View>

                    <Text style={{ marginLeft: '6%', color: '#FF6666' }}>{isempty}</Text>
                    {loading ?
                        <View style={FeedbackStyle.submit_btn}>
                            <ActivityIndicator size="small" color="white" />
                        </View>
                        :
                        <TouchableOpacity onPress={submitfeedback} style={FeedbackStyle.submit_btn}>
                            <Text style={FeedbackStyle.submit_text}>Submit</Text>
                        </TouchableOpacity>
                    }

                </View>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Feedback submitted"
                    message={submitted}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}

                    showConfirmButton={true}
                    contentContainerStyle={FeedbackStyle.contentContainer}
                    confirmButtonStyle={FeedbackStyle.confirmButton}
                    confirmText="ok"
                    confirmButtonColor="green"
                    onConfirmPressed={() => setshowAlert(false)}

                />
            </SafeAreaView>
        </SafeAreaView>
    )
}
