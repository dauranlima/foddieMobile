import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/button.style";



function Button(props) {
    return <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.texto}>{props.text}</Text>
    </TouchableOpacity>
}

export default Button;