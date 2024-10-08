import { Text, Image, View } from 'react-native'
import { styles } from '../styles/header.style'
import icons from '../constants/icons'
export default function Header(props) {

  return (
    <View style={styles.header}>
    <Image
      style={styles.logo}
      source={icons.logo}
    />
    <Text style={styles.title}>
      {props.text}
    </Text>
    </View>
  )
}