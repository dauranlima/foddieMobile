import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/input.box.style'
export default function InputBox(props) {
  return (
    <View >
      <Text style={styles.textLabel}>{props.label}</Text>
      <TextInput 
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        style={styles.InputBox}
      />
    </View>
  )
}