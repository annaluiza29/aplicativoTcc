import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({    
    
    containerBox:{
        width: '90%',
        alignSelf: "center",
        marginBottom: 25,
        border: '10px solid #E28934'
    },

    box:{
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 10,
        marginTop: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#E28934',
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        height: 300,
    },

    boxUnder:{
        borderBottomWidth: 1,
        borderBottomColor: '#7FCFEF'
    },

    informacoesG:{
        alignSelf: "center",
        display: 'flex',
        flexDirection: 'row',
    },

    informacoes:{
        padding: 12
    },

    informacoes2:{
        display: 'flex',
        flexDirection: 'row',
    },

    titleInfo:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#E28934',
    },

    textInfo:{
        fontFamily: fonts.text,
        fontSize: 16    
    },

    titleInfo2:{
        fontFamily: fonts.text,
        fontSize: 18,
    },

    textInfo2:{
        fontFamily: fonts.text,
        fontSize: 16,
        paddingLeft: 10,
        marginTop: 2
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 10,
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 17,
        color: '#000',
    },

    textProgressContainer:{
        alignSelf: "center",
        display: 'flex',
        width: 180,
        paddingLeft: 15
        
       },

       numberInside:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    removeItem:{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 0,
        
      },

})