import { styles } from '../styles/categories.style'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
export default function Categories(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      {props.dados.map((cat,i)=>{
        return <View key={cat.id} style={styles.categoria}>
        <TouchableOpacity>
          <Image style={styles.icone} source={cat.icone} />
          <Text style={styles.descricao}>{cat.descricao}</Text>
        </TouchableOpacity>
        </View>
      })}
      </ScrollView>
    </View>
  )
}