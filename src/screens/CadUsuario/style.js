import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({

    BackButton:{
     
        position: 'absolute',
        left: 10,
        alignItems: "center",
        justifyContent: "center",
        top: 30,
    },

    container:{
        flex: 1,
        backgroundColor: "white",
        position: 'relative',  
    },


    //Decoração da lateral
    decoration:{
        marginTop: -280
    },


    lateral:{
        backgroundColor: "#7FCFEFB2",
        width: 100,
        height: 100,
        marginTop: 90,
        borderRadius: 100,
        marginLeft: -30
    },
    lateral2:{
        backgroundColor: "#E28934",
        width: 100,
        height: 100,
        marginTop: -10,
        borderRadius: 100,
        marginLeft: -30
    },

    lateral3:{
        backgroundColor: "#E28934",
        width: 100,
        height: 100,
        marginLeft: 330,
        marginTop: 90,
        borderRadius: 100
    },

    lateral4:{
        backgroundColor: "#7FCFEFB2",
        width: 100,
        height: 100,
        marginTop: -10,
        borderRadius: 100,
        marginLeft: 330
    },

    TextInput:{
      borderWidth: 0.5,
      borderColor: "#fff",
        width: 250,
        borderRadius: 35    ,
        padding: 10,
        marginTop: 35,  
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 35

    },

    //Informar dados
    form:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 40,
        position: 'absolute',
        top: '30%',
        alignSelf: 'center',
        height: 400,
      },

    title:{
        color: "#E28934",
        borderBottomWidth: 3,
        borderBottomColor: "#E28934",
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "bold"
    },

    elevation:{
        elevation: 7,
        shadowColor: '#',
      },


    //Botão cadastrar
    Button:{
        backgroundColor: '#7FCFEF',
        width: '70%',
        alignSelf: "center",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 35,
        marginBottom: 20,
    },
    ButtonText:{
        fontSize: 20,
        color: '#fff',
        fontFamily: fonts.text,
    },

    //Botão entrar
    Button2:{
        borderBottomWidth: 3,
        borderBottomColor: "#7FCFEF",
        width: '60%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },

    ButtonText2:{
        fontSize: 20,
        color: "#7FCFEF",
        fontFamily: fonts.text,
    },


    text:{
        fontSize: 18,
        fontWeight: "bold"
    },

})