import { View, Text, Image } from 'react-native'
import { styles } from '../styles/menu.style'

export default function Menu(props) {
  return (
    <View style={styles.container}>
      <Image source={Image.props}/>
      <Text>Este e uma pagina</Text>
    </View>
  )
}