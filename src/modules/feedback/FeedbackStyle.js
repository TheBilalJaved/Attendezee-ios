
import { StyleSheet } from 'react-native'

export const FeedbackStyle = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    input_container: {
        marginLeft: "6%",
        marginRight: '6%',
        marginTop: 10,
    },
    input_label: {
        paddingLeft: "2%",
        color: 'gray',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '700'


    },
    textinput: {
        borderWidth: 2,
        borderColor: '#C8C8C8',
        height: 150,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: 'black',
    },
    submit_btn: {
        marginTop: 50,
        marginLeft: '6%',
        marginRight: '6%',
        backgroundColor: '#494446',
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submit_text: {
        color: 'white',
        fontSize: 16,
    },
    contentContainer: {
        marginRight: '5%',
        marginLeft: '5%',
        width: 270,
        height: 170,
        borderRadius: 15
    },
    confirmButton: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',




    },
})