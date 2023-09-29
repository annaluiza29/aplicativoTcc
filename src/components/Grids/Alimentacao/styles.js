import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    icon:{
        paddingTop: 10
    },

    containerBox:{
        width: '95%',
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
        height: 150,
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

    titleInfo:{
        fontFamily: fonts.text,
        fontSize: 21,
        color: '#E28934',
    },

    textInfo:{
        fontFamily: fonts.text,
        fontSize: 18,
        textAlign: 'center'
    },

    removeItem:{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 0,
        
      },

    name:{
        marginLeft: 25,
        fontFamily: fonts.text,
        fontSize: 20
    },
})