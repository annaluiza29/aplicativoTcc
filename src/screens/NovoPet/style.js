import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    TextInput:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '85%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 45,
    },

    TextInputArea:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '90%',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 90,
    },

    Picker:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '100%',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 60,
    },

    PickerRow:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: 140,
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 45,
    },

    Button:{
        backgroundColor: '#e5964a',
        width: '60%',
        alignSelf: "center",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },

    ButtonText:{
        fontSize: 20,
        color: '#fff',
        fontFamily: fonts.text,
    },

    TitleInputs:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: "#000",
        marginLeft: 35,
        marginTop: 15,
    },
    
    TitleInputsRow:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: "#000",
        marginLeft: 13,
        marginTop: 15,
    },

    BackButton:{
     
        position: 'absolute',
        left: 10,
        alignItems: "center",
        justifyContent: "center",
        top: 30,
    },

    BackButtonText:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: 'gray',
        marginLeft: 5,
        alignSelf: "center",
    },

    SexoAndCivil:{
        flexDirection: 'row',
        alignSelf: "center",
    },

    Title:{
        alignSelf: "center",
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12
    },

    TitleText:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    Header:{
        borderBottomWidth: 0.6,
        borderBottomColor: '#c1c1c1',
        paddingBottom: 0,
        marginBottom: 15,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5964a'
    },

    pickDate:{
        backgroundColor: '#fff',
        padding: 10,
        width: '90%',
        borderRadius: 5,
        alignItems: "center",    
        borderColor: '#000',
        borderWidth: 0.5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        flexDirection: 'row',
        height: 45,
        marginBottom: 5,
      },

      date:{
        fontFamily: fonts.text,
        fontSize: 15,
        color: '#000',
        alignSelf: "center",
      },

      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
      },
      radioButtonSelected: {
        backgroundColor: '#f2f2f2', // cor de fundo quando selecionado
      },
      radioText: {
        marginTop: 5,
        fontSize: 16,
      },

      tipo:{
        marginTop: 25,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
      },



      pickerporte:{
        width: 200,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: '#000'
      },
})