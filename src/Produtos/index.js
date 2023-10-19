
//instalar carrossel = npm --save react-native-snap-carousel
import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Button, Text, View, SafeAreaView, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import { ScrollView, Directions } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

const{width:larguraTela, height:alturaTela} = Dimensions.get('window');

export default function Produtos({route}) {

    const [lista, setLista] = useState([
        

        {
            title:"Sistema Delivery",
            text: "Só fazer os pedidos, pagar pelo sistema ou pagar na entrega, vai ter toda a gestão de pedidos",
            valor: 180,
            img: 'https://st4.depositphotos.com/22320990/24166/v/1600/depositphotos_241668252-stock-illustration-delivery-vector-illustration-delivery-service.jpg'
        },

        {
            title:"Motos",
            text: "Aprenda tudo sobre motos na estrada, viagens e conhecimentos de mecânica",
            valor: 40,
            img: 'https://cdn.pixabay.com/photo/2022/06/08/05/43/motorbike-7249769_960_720.jpg'
        },

        {
            title:"React com Mysql",
            text: "Neste curso é mostrado o passo a passo de como conectar os aplicativos android e ios criados pelo React com um banco de dados mysql",
            valor: 50,
            img: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-mobile-banking-app-welcome-page-startup-page-h5-background-psd-image_153932.jpg'
        },
        
      ]);

    const [background, setBackground] = useState(lista[0].img);
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const _renderItem = ({item, index}) => {
        return(
            <View>
         <TouchableOpacity>
          <Image
          source={{uri: item.img}}
          style={styles.carouselImg}
          />
          <Text style={styles.carouselText}>{item.title}</Text>
          <Icon 
          name="play-circle-outline" 
          size={30} color="#FFF" 
          style={styles.carouselIcon} 
          />
        </TouchableOpacity>
            </View>
        )
    }
   
  return (
      <ScrollView style={styles.container}>
        <View style={{flex:1, height:alturaTela}}>
            <View style={{...StyleSheet.absoluteFill, backgroundColor:'#000' }}>
                <ImageBackground source={{uri: background}} style={styles.imgBg} blurRadius={8} >
                
        
           
            <Text 
            style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
            marginLeft: 10, marginVertical: 10, }}
            >
              Produtos 
            </Text>


            <View style={styles.slideView}>
              <Carousel
              style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={larguraTela}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={ (index) => {
                setBackground(lista[index].img);
                setActiveIndex(index);
              }}
              />
            </View>

            <ScrollView>
            <View style={styles.moreInfo}>
              <View style={{marginTop: 5}}>

                <View style={styles.headerTitleInfo}>
                <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.priceTitle}>R$ {lista[activeIndex].valor},00</Text>
                </View>
                
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
              <TouchableOpacity 
              style={{ marginRight: 15, marginTop: 10 }} 
              onPress={() => alert('Você enviou pro carrinho')}
              >
                <Icon 
                name="queue" 
                color="#131313" 
                size={30} 
                />
              </TouchableOpacity>
            </View>
            </ScrollView>

            </ImageBackground>

            </View>
        </View>
      </ScrollView>
   
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      },
      imgBg:{
        flex:1,
        width: null,
        height: null,
        opacity: 1,
        justifyContent: "flex-start",
        backgroundColor: '#000'
      },

      viewSearch:{
        marginTop: 40,
        backgroundColor: '#FFF',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'
      },
      input:{
        width: '90%',
        padding: 13,
        paddingLeft: 20,
        fontSize: 17,
      },
      icon:{
        position: 'absolute',
        right: 20,
        top: 15,
      },

      slideView:{
        width: '100%',
        height: 450,
        justifyContent: 'center',
        alignItems: 'center'
      },

      carousel:{
        flex:1,
        overflow: 'visible'
      },
      carouselImg:{
        alignSelf: 'center',
        width: 200,
        height: 300,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      carouselText:{
        padding: 15,
        color: '#FFF',
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold'
      },
      carouselIcon:{
        position:'absolute',
        top: 15,
        right: 15,
      },
      moreInfo:{
        backgroundColor: '#FFF',
        width: larguraTela,
        height: alturaTela,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      movieTitle:{
        paddingLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#131313',
        marginBottom: 5,
      },
      movieDesc:{
        paddingLeft: 15,
        color: '#131313',
        fontSize: 14,
        fontWeight: 'bold'
      },

      headerTitleInfo:{
          flexDirection:'row',
      },

      priceTitle:{
        paddingLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#055a02',
        marginBottom: 5,
      },
});
