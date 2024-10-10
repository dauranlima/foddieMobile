import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/produto.style'

export default function Produto({ foto,name,description,price }) {
  return (
    <TouchableOpacity style={styles.container} >
      <Image style={styles.foto} source={foto}/>
      <View style={styles.texts}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <Text style={styles.valor}>{price.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</Text>
    </TouchableOpacity>
  )
}