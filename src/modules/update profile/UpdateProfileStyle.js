import { StyleSheet } from "react-native";


export const UpdateProfileStyle = StyleSheet.create({
    root:{
       flex:1,
       backgroundColor:'white'
    },
    user_pic_container:{
        height:200,
        width:'100%',
        backgroundColor:'#494446',
        alignItems:'center',
        justifyContent:'center',

    },
    userpic:{
        width:100,
        height:100,
        borderRadius:100/2
    },
    input_container:{
        marginLeft:'6%',
        marginRight:'6%',
        marginTop:'9%',
       

    },
    email_info:{
        flexDirection:'row' , 
        borderBottomWidth:1,
        paddingBottom:18,
        paddingTop:20,
        borderColor:'lightgray',
    },
    info_heading:{
       width:120,
    },
    textinput:{
        color:'black',
        width:200 ,
        
        fontSize:16,
        padding:0
    },
    btn:{
        width:'100%',
        marginTop:'12%',
        marginBottom:70,
        alignItems:'center',
        justifyContent:'center' ,
        backgroundColor:'#494446',
        padding:10,
        borderRadius:15
    },
    header1:{
        borderColor:'white',
        shadowColor:'#333333',
        shadowOffset:{width:-1,height:-3},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    panelheader:{
        alignItems:'center'
    },
    panelhendle:{
        width:40,
        height:80,
        borderRadius:4,
        backgroundColor:'#00000040',
        marginBottom:10
    }
})  