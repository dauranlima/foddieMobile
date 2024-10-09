import { Text, Image, View, TouchableOpacity } from 'react-native'
import { styles } from '../styles/header.style'
import icons from '../constants/icons'
export default function Header(props) {

  return (
    <View style={styles.header}>
    <TouchableOpacity>
    <Image
      style={styles.logo}
      source={icons.logo}
    />
    </TouchableOpacity>
    <Text style={styles.title}>
      {props.text}
    </Text>
    </View>
  )
}