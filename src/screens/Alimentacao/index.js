import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Dimensions,
    FlatList

} from 'react-native';

import { EvilIcons,MaterialIcons, Ionicons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Grid from '../../components/Grids/Alimentacao';


export default function Alimentacao() {
    const navigation = useNavigation();

    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


    async function loadData() {        
      try {
          const response = await api.get(`pam3etim/bd/usuarios/listarAli.php?pagina=${page}&limite=10`);

          if(lista.length >= response.data.totalItems) return;

          if (loading === true) return;
    
          setLoading(true);
    
          setLista([...lista, ...response.data.resultado]);
          setPage(page + 1);
        } catch (error) {
          console.log(error)
        }
  }


  const renderItem = function ({ item }) {
    return (
        <Grid
            data={item}
        />
    )
}

  function Footer() {
    //if (!load) return null;

    return (
        <View style={styles.loading}>
            <ActivityIndicator size={25} color="#000" />
        </View>
    )
}






 useEffect(() => {
  loadData();
}, [page, totalItems, lista]);


    return (
        
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>

            <View style={styles.header}>
                    <View style={styles.containerHeader}>

                        <View style={styles.top}>
                                <Image style={styles.logo} source={require('../../assets/topAlimen.png')} />
                                <Text style={styles.title}>ALIMENTAÇÃO</Text>

                        <TouchableOpacity   
                                style={styles.BackButton}
                                onPress={() => navigation.push("Home")}
                            >
                                <Ionicons name="md-arrow-back-circle-outline" size={35} color="#fff" />

                        </TouchableOpacity>

                        </View>

                    </View>
                </View>
                    
                <View style={styles.boxTitle}>
                    <Text style={styles.TitleBox}>Rotina de Alimentação:</Text>
                </View>

                <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
              
              <FlatList
                  data={lista}
                  renderItem={renderItem}
                  keyExtractor={item => String(item.id)}
                  onEndReachedThreshold={0.1}
                  removeClippedSubviews
                  initialNumToRender={10}
                  onEndReached={(distanceFromEnd) => {
                    if (!onEndReachedCalledDuringMomentum) {
                      loadData().then(() => setLoading(false));
                      setMT(true);
                    }
                  }}
                  ListFooterComponent={(distanceFromEnd) => {
                    if (!onEndReachedCalledDuringMomentum) {
                      return <Footer load={loading} />
                    } else {
                      return <View></View>
                    }
                  }}
                  onMomentumScrollBegin={() => setMT(false)}
                  windowSize={10}
                  getItemLayout={(data, index) => (
                    { length: 50, offset: 50 * index, index }
                  )}
              />
             
            </View>
                
                    <View style={styles.containerFloat}>
                    <TouchableOpacity
                        style={styles.CartButton}
                        onPress={() => navigation.push("NovaAlimentacao", { id: '0' })}
                    >
                        <Ionicons name="add-outline" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>






    )
                    }