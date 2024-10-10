import { styles } from "../styles/orderDetails.style";
import { pedido } from "../constants/dados";

import { View, Text,  FlatList } from 'react-native'
import Produto from "../components/produto";
export default function OrderDetails(props) {
	return (
		<View style={styles.container}>
			<FlatList
				data={pedido.itens}
				keyExtractor={(item)=> item.idItem}
				showVerticalScrollIndicator={false}
				vertical={true}
				renderItem={({item}) => {
					return(
						<Produto
						key={item.idItem}
						foto={item.foto}
						name={item.nome}
						description={item.descricao}
						price={item.vlTotal}
						/>
					)
				}}
			/>
			<View>
				<Text style={styles.resume}>Resumo dos Valores</Text>
				<View style={styles.valores}>
					<Text  style={styles.textos}>Subtotal</Text>
					<Text  style={styles.textos}>R$35,00</Text>
				</View>
				<View style={styles.valores}>
					<Text style={styles.textos}>Taxa de Entrega</Text>
					<Text style={styles.textos}>R$3,00</Text>
				</View>
				<View style={styles.valores}>
					<Text style={styles.textosTotal}>Total</Text>
					<Text style={styles.textosTotal}>R$40,00</Text>
				</View>
			</View>
		</View>
	)
}


