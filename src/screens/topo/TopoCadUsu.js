import React from "react"; 
import { Image, StyleSheet, Dimensions } from "react-native"; 
import Top from '../../assets/logoCadUsu.png'; 

const width = Dimensions.get('screen').width; 

export default function Topo() 
{ 
    return <> 
    <Image style={styles.topo} source={Top}></Image> 
    </> 
} 



const styles = StyleSheet.create ({ 
    topo:{ width: '100%', height: 350/750 * width 
}, 
});