import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../styles/home.style'
import icons from '../constants/icons'
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from '../components/InputBox';3
import { useState } from 'react'
import Categories from '../components/Categories';
import {banners, categorias, restaurantes} from '../constants/dados'
import Banner from '../components/banner';
import Restaurante from '../components/restaurante';


export default function Home() {

  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#000'}/>
    <View style={styles.headerBar} >
      <Image source={icons.logo}style={styles.logo}/>
      <TouchableOpacity>
      <Image source={icons.cart}style={styles.cart}/>
      </TouchableOpacity>
    </View>
    <View>
      <InputBox style={styles.search} onChangeText={(text)=> setSearch(text)} value={search} placeholder="O que vamos pedir hoje?"/>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>

      <Categories dados={categorias}/>
      <Banner dados={banners} />
      {
        restaurantes.map((restaurante)=>{
          return(
            <View key={restaurante.id}>
              <Restaurante name={restaurante.nome} logo={restaurante.logotipo} address={restaurante.endereco} icon={icons.favoritoFull2}/>
            </View>
          )
        })
      }
        </ScrollView>
    </SafeAreaView>
  )
}