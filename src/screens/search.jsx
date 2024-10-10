import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/search.style'
import { restaurantes } from '../constants/dados'
import Restaurante from '../components/restaurante'
import icons from '../constants/icons'

export default function Search() {
  return (
    <View style={styles.fav}>
      <FlatList 
      data={restaurantes} 
      keyExtractor={(restaurante)=> restaurante.id}
      showVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return (
          <>
          <TouchableOpacity>
            <Restaurante 
            name={item.nome} 
            address={item.endereco}  
            logo={item.logotipo} 
            icon={icons.favoritoFull2} />
          </TouchableOpacity>
          </>
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