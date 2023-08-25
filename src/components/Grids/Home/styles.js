import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    centralizarModal:{    
        flex: 1,
        justifyContent: "center",    
        backgroundColor: 'rgba(0, 0, 0, 0.37)'
        },
    
      CardContainerModal:{
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        paddingBottom:15,
        
    },
    
    ImagemModal:{  
            
            width:300,
            height:300,
            
        },
    
    
    Cliente:{
            fontFamily: fonts.text,
            fontSize: 18,
            marginBottom:12,
        },
    
        Valor:{
            fontFamily: fonts.text,
            fontSize: 15,            
            marginBottom: 5,
            color: '#3d3d3d',
        },
    
    
    ValorRes:{
            fontFamily: fonts.text,
            fontSize: 13,
            color: '#ff3333',
            marginBottom: 5,
        },
    
        Section:{
            flexDirection: 'row',
            alignItems: "center",
            marginTop: 5,
        },
    
        Entrada:{
            fontFamily: fonts.text,
            fontSize: 14,
            marginLeft: 20,
            color: 'gray',
        },
    
        Vencimento:{
            fontFamily: fonts.text,
            fontSize: 14,
            position: 'absolute',
            right: 0,
            color: 'gray',
        },
    
        Vencimento2:{
            position: 'absolute',
            right: 0,
            height:35,
            width:35,
            top:-50,
        },
    
    
     Footer:{
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 0.5,
            borderTopColor: '#c1c1c1',
            padding: 7,
            marginTop: 12,
            width: '95%',
            alignSelf: "center",
        },
    
        FooterText:{
            fontFamily: fonts.text,
            fontSize: 16,
        },
    
        Icon:{
            position: 'absolute',
            left: -5,
        },

         viewImg:{  
        
        justifyContent: "center",   
        alignItems: "center",   
        margin:10,       
    },

    textoAbrir:{
        fontFamily: fonts.text,
        fontSize: 13,
        color: 'gray',
    },

    TextInput:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '100%',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 45,
    },

    TitleInputs:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: "#000",
        marginLeft: 35,
        marginTop: 15,
    },

    Button:{
        backgroundColor: '#328fad',
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

    textos:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
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
        paddingRight: 20   
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