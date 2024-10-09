import { View, Text, FlatList, Image } from 'react-native'
import { styles } from '../styles/orders.style'
import { pedidos } from '../constants/dados'
import icons from '../constants/icons'
import OrderItem from '../components/orderItem'


export default function Orders() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={pedidos} 
      keyExtractor={(pedido)=> pedido.id}
      showVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return (
          <OrderItem
          logo={item.logotipo}
          name={item.nome}
          price={item.vl_total}
          order_date={item.dt_pedido}
          status={item.status}
          />
        )
      }}
      
      contentContainerStyle={styles.emptyList}

      ListEmptyComponent={()=>{
        return(
          <View style={styles.empty}>
            <Image source={icons.empty}/>
            <Text style={styles.emptyText}>Nenhum pedido</Text>
          </View>
        )
      }}
      
      />
    </View>
  )
}