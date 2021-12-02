import { StyleSheet } from "react-native";


export const FilterStyle = StyleSheet.create({
    date_btn: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingBottom: 15,
        alignItems: 'center',
        paddingTop: 15
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
    cardshadow_container: {
        padding: 2,
        margin: 4,
        borderRadius: 4,
        borderWidth: 0,
        borderColor: 'transparent',

        shadowColor: '#727272',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 1,
    },
    card_container: {
        paddingBottom: 20,
        paddingTop: 10,
        borderRadius: 17,
        borderWidth: 0,
        borderColor: '#Fff',
        backgroundColor: '#fff'
    },
    card_date: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    shift_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    shifts: {
        alignItems: "center",
        justifyContent: 'center'
    },
    shift_heading: {
        fontSize: 12,
        paddingBottom: 10,
        fontWeight: '800'
    },
    sift_time: {
        fontSize: 11
    },
    hours_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20

    },
    totalhours: {
        flexDirection: 'column',
        justifyContent: "center",
        paddingLeft: 15,
        alignItems: 'center'
    },
    hours_heading: {
        fontSize: 13,
        paddingBottom: 5,
        fontWeight: '900'
    },
    totalhours_break: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        paddingRight: 15
    },
    hours_total: {
        fontSize: 13,
    },
    hours_break: {
        fontSize: 13,
        paddingRight: 15
    },
    leave: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    leave_text: {
        fontSize: 13,
        fontWeight: '600',
        color: '#A2A8B5'
    },
    root: {
        flex: 1,
        backgroundColor: 'white',
        overflow: 'scroll'
    },
    dropdown: {
        marginTop: 15,
        marginLeft: '6%',
        marginRight: '6%',
        zIndex: 1000
    },
    date_text: {
        marginTop: 8,
        marginLeft: '6%',
        marginRight: '6%'
    },
    selected_date: {
        fontSize: 18,
        marginLeft: 5
    },
    radio_container: {
        marginLeft: '6%'
    },
    radio_btn: {
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    filter_btn: {
        width: '90%',
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#494446',
        padding: 10,
        borderRadius: 15
    },
    filter_btn_text: {
        fontSize: 20,
        color: "white"
    },
    filter_items: {
        flex: 1,
        margin: '5%',
        backgroundColor: 'white'
    },

})