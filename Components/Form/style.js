import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    form: {
        marginHorizontal:50,
        marginTop:30
    },
    label: {
        color: '#066665',
        position: 'absolute',
        top: -10,
        right: 20,
        padding: 2,
        zIndex: 3,

    },
    labelPass: {
        color: '#066665',
        position: 'absolute',
        top: -7,
        right: 20,
        padding: 2,
        zIndex: 3,

    },
    after: {
        content: ' ',
        backgroundColor:  '#e8f0fe',
        width: 50,
        height: 5,
        position: 'absolute',
        top: -1,
        right: 20,
        zIndex: 2,


    },
    inputName: {

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.14,
        shadowRadius: 9,
        elevation: 2,
        backgroundColor: '#e8f0fe',
        borderRadius: "5%",
        borderTopWidth: '1%',
        borderRightWidth: '1%',
        borderLeftWidth: '1%',
        borderColor: '#8caeb2',
        width: '100%',
        padding: 30,
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        height:'20%'

    },
    inputPass: {

        backgroundColor: '#e8f0fe',
        borderRadius: 5, // Update the value to a number
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#8caeb2',
        width: '100%',
        padding: 30,
        height: 20,
        position: 'relative',
        top: '10%',

    },


    Icon: {
        position: 'absolute',
        top: 20,
        right: 30,
        padding: 2,
        color: '#5bbd7e',
        zIndex: 5,
    },
    inputPassMain:{
        position:"relative",
        bottom: '2%',

    },
    button:{
        width:"100%",
        marginTop:30,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'linear-gradient(90deg, rgba(24, 158, 36, 1) 100%, rgba(66, 180, 30, 1) 35%, rgba(152, 226, 19, 1) 0%);',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.11,
        shadowRadius: 10,
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontWeight:"bold"
    }


});





