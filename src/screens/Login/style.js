import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "white",
      position: 'relative'

    },

    form:{
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center', 
      borderRadius: 30,     
      borderWidth: 3,
      borderColor: '#E28934',
      padding: 40,
      position: 'absolute',
      top: '23%',
      backgroundColor: 'white',
      alignSelf: 'center',
      height: 400
    },

    title:{
      color: "#E28934",
      justifyContent: 'center',
      alignItems: 'center',
      top: -30,
      left: 135,
      backgroundColor: '#fff',
      width: 120, 
      borderWidth: 3,
      paddingLeft: 23,
      borderColor: "#E28934",
      borderRadius: 30,
      fontSize: 25,
      fontWeight: "bold",
      zIndex: 2
    },

    login:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      width: '100%',
      height: 35,
      paddingLeft: 10,
      marginBottom: 40,
      borderRadius: 30
    },

    elevation:{
      elevation: 7,
      shadowColor: '#000',
    },

    loginSave:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7FCFEF',
      marginTop: 15,
      width: 100,
      height: 30,
      borderRadius: 70,
      marginBottom: 15,
    },

    text:{
      color: '#fff',
      fontSize: 20,
      fontFamily: fonts.text,
    },

    logo:{
      width: 400,
      height: 200,
      marginTop: -150,
      marginBottom: 50
    },

    textoIcon:{
      color: 'white',
      fontSize: 18,
    },

    google:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
    },

    apple:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
      marginLeft: 10,
    },

    row:{
      flexDirection: 'row',
    },

    forget:{
      color: '#737373',
      fontSize: 14,
      marginTop: 40,
    },

    textRow:{
      alignSelf: 'center',
      fontFamily: fonts.text,
      fontSize: 16,
      color: 'black',
      marginTop: 5,
      marginRight: 5,
    },

    traco:{
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#C1C1C1',
      width: '80%',
    },

    signup:{
      color: '#737373',
    },

    signupQ:{
      color: 'black',
    },

})


