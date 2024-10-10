import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/orderItem.style'


export default function OrderItem(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.ClickOrderDetails()}>
      <Image source={props.logo} style={styles.image}/>
      <View  style={styles.texts}>
        <Text style={styles.name}>{props.name}Churrascaria boizão</Text>
        <View  style={styles.priceAndDate}>
          <Text style={styles.price}>
            {
            new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(props.price)
            }
          </Text>
          <Text style={styles.date}>{props.order_date}</Text>
        </View>
        <Text style={styles.entregue}>{props.status}</Text>
      </View>
    </TouchableOpacity>
  )
}