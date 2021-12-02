import { StyleSheet } from "react-native";


export const LeaveStyle = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',

    },
    logo_container: {

        width: "100%",
        height: 100,
        backgroundColor: '#494446',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25

    },
    textheader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    date_btn: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#C8C8C8',
        paddingBottom: 15,
        alignItems: 'center',
        paddingTop: 15


    },
    btn_text: {

        fontSize: 18,
        width: 50,
        color: '#494446'
    },
    date_container: {
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: 10
    },
    date_text: {
        marginLeft: 15,
        fontSize: 18,


    },
    textinput: {
        borderWidth: 2,
        borderColor: '#C8C8C8',
        height: 150,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: 'black',


    },
    req_btn: {

        padding: 10,
        alignItems: 'center',
        marginLeft: '6%',
        marginRight: '6%',


        marginTop: '10%',
        borderRadius: 15,
        marginBottom: 60,

    },
    signIn: {
        width: '96%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',

        marginTop: '10%',

        marginBottom: 60,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    message: {
        marginLeft: '5%',
        marginTop: 10,
        color: 'red'
    },
    loading_btn: {
        width: '90%',
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#494446',
        padding: 10,
        borderRadius: 15
    },
    request_btn: {
        width: '90%',
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#494446',
        padding: 10,
        borderRadius: 15
    },
    requestbtn_text: {
        fontSize: 20,
        color: "white"
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
    shadow_container: {
        marginLeft: '6%',
        marginRight: '6%',
        padding: 2,
        margin: 4,
        borderRadius: 20,
        borderWidth: 0,
        borderColor: 'transparent',

        shadowColor: '#727272',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 1,
    },
    shadow_inner: {
        paddingBottom: 20,
        paddingTop: 20,

        borderRadius: 17,
        borderWidth: 0,
        borderColor: '#Fff',
        backgroundColor: '#fff'
    },
    status_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        flexDirection: 'row',
    },
    status: {
        fontWeight: '800',
        fontSize: 15
    },
    status_text: {
        fontSize: 15,
        fontWeight: '800',
        textTransform: 'capitalize',
        letterSpacing: 1.5
    },
    date_container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    date_heading: {
        paddingRight: 10,
        fontWeight: '800'
    },
    reason_container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    reason_text: {
        fontWeight: '800',
        fontSize: 15
    },
    page_heading: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#494446'
    },
    dropdown: {
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: 80,
        zIndex: 1000,
    },

})