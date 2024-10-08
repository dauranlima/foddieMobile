import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import { styles } from '../styles/restaurante.style'

export default function Restaurante(props) {
  return (
    <TouchableOpacity style={styles.Restaurante} onPress={()=> props.onPress()}>
      <Image source={props.logo} style={styles.logotipo}/>
      <View style={styles.texts}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.address}>{props.address}</Text>
      </View>
      <TouchableOpacity>
      <Image style={styles.icon} source={props.icon}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}