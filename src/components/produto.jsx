import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/produto.style'
import icons from '../constants/icons'

export default function Produto({onClickDelete,foto,name,description,price }) {
  return (
    <TouchableOpacity style={styles.container} >
      <Image style={styles.foto} source={foto}/>
      <View style={styles.texts}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <View>
      <Text style={styles.valor}>{price.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</Text>
      {
        onClickDelete &&
        <TouchableOpacity style={styles.Btndelete}  onPress={onClickDelete}>

        <Image source={icons.remove} style={styles.delete}/>
      </TouchableOpacity>
      }
      </View>
    </TouchableOpacity>
  )
}
