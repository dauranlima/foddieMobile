import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles/input.box.style'
export default function InputBox(props) {
  return (
    <View >
      { props.label && <Text style={styles.textLabel}>{props.label}</Text>}
      <TextInput 
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={props.onChangeText}
        style={styles.InputBox}
        value={props.value}
      />
    </View>
  )
}