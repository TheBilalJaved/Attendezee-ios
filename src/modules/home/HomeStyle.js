import { StyleSheet,Dimensions, } from "react-native";
const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width


const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";


export const HomeStyle = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    logo_container: {
        height: 150,
        width: "100%",
        backgroundColor: '#494446',
        // borderBottomRightRadius: 150,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    checkin_container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        marginLeft: '3%',
        marginRight: '3%',
        borderTopWidth: 2,
        borderColor: '#C8C8C8',
        zIndex: 200

    },
    btn_container: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        marginBottom: 40,

    },
    check_btn: {
        height: 70,
        width: '23%',
        borderRightWidth: 2,
        paddingTop: '3%',
        paddingBottom: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#C8C8C8'


    },
    breakend: {
        height: 70,
        width: '23%',
        borderColor: '#C8C8C8',
        paddingTop: '3%',
        paddingBottom: '3%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardshadow_container: {
        padding: 2,
        margin: 4,
        marginTop: 20,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 10,

        borderRadius: 17,
        borderWidth: 0,
        borderColor: 'transparent',

        shadowColor: '#727272',
        shadowOpacity: 1,
        shadowRadius: 4,
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
    shiftcontainer: {
        flexDirection: 'row', justifyContent: 'space-evenly'
    },
    shift_block: {
        alignItems: "center", justifyContent: 'center'
    },
    today_text: {
        fontWeight: '800'
    },
    shift_heading: {
        fontSize: 12, paddingBottom: 10, fontWeight: '600'
    },
    shift_time: {
        fontSize: 11,
        fontWeight: '800'
    },
    hours_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    total_hours_container: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        paddingLeft: 15
    },
    Hours_heading: {
        fontSize: 13,
        paddingBottom: 5,
        fontWeight: '800'
    },
    totalBreak_container: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        paddingRight: 15
    },
    total_hours_text: {
        fontSize: 13
    },
    leave: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    leave_text: {
        fontSize: 17,
        fontWeight: '600'
    },
    btn_text: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    scannerbtn: {
        width: '88%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: '6%',
        marginRight: '6%'
    },
    scannerbtn_text: {
        width: '88%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: '6%',
        marginRight: '6%',
        marginBottom: 100,
    },
    modalstyle: {
        // height: '100%',
        // width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494446'
    },
    dropdown: {
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '3%',
        marginBottom: 1,
        zIndex: 1000,
    },
    image_container: {
        marginLeft: '5%',
        flexDirection: 'row',
        width: "90%",
        position: 'relative',
        overflow: 'hidden'
    },
    user_pic: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    useinfo_text: {
        paddingTop: 10
    },
    user_firstname: {
        fontSize: 16,
        color: "white",
        fontWeight: 'bold',
        paddingLeft: 15,
        textTransform: 'capitalize'
    },
    designation_id: {
        paddingLeft: 15,
        color: 'white'
    },
    eclips: {
        position: 'absolute',
        marginTop: 0,
        right: 0,
        flexDirection:'row'
    },
    slider: {
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 50,
        marginTop: 10
    },
    contentContainer: {
        marginRight: '5%',
        marginLeft: '5%',
        width: 270,
        height: 170,
        borderRadius: 15
    },
    Alertconfirmbtn: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',



    },
    rules_container: {
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '5%',
        marginBottom: 20,
        backgroundColor: '#FFFdaf',
        padding: 25,
        borderRadius: 15,
    },
    rules_heading: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    rules_text: {
        marginTop: 10,
        textTransform: "capitalize"
    },
    rectangleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
      },
    
      rectangle: {
        height: rectDimensions,
        width: rectDimensions,
        borderWidth: rectBorderWidth,
        borderColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
        
      },
    
      topOverlay: {
        flex: 1,
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor,
        justifyContent: "center",
        alignItems: "center"
      },
    
      bottomOverlay: {
        flex: 1,
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor,
        paddingBottom: SCREEN_WIDTH * 0.25
      },
    
      leftAndRightOverlay: {
        height: SCREEN_WIDTH * 0.65,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor
      },
    
      scanBar: {
        width: scanBarWidth,
        height: scanBarHeight,
        backgroundColor: scanBarColor
      },


})