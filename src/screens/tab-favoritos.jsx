import { View, Text, FlatList, Image } from 'react-native'
import { styles } from '../styles/tab-favoritos.style'
import { restaurantes } from '../constants/dados'
import Restaurante from '../components/restaurante'
import icons from '../constants/icons'

export default function TabFavoritos() {
  return (
    <View style={styles.fav}>
      <FlatList 
      data={restaurantes} 
      keyExtractor={(restaurante)=> restaurante.id}
      showVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return (
          <Restaurante 
          name={item.nome} 
          address={item.endereco}  
          logo={item.logotipo} 
          icon={icons.remove} />
        )
      }}
      
      contentContainerStyle={styles.emptyList}

      ListEmptyComponent={()=>{
        return(
          <View style={styles.empty}>
            <Image source={icons.empty}/>
            <Text style={styles.emptyText}>Nenhum restaurante favoritado</Text>
          </View>
        )
      }}
      
      />
    </View>
  )
}