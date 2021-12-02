import { StyleSheet } from "react-native";


export const UpdatepasswordStyle = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },


    signIn: {

        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: '7%',
        marginRight: '7%',

    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    input_lable: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 10,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'black',
    },
})