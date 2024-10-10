import { styles } from "../styles/checkout.style";
import { pedido } from "../constants/dados";

import { View, Text,  FlatList } from 'react-native'
import Produto from "../components/produto";
import Button from "../components/button";
export default function Checkout(props) {

	function clickDelete(){
		alert('clicou excluir')
	}

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
						onClickDelete={clickDelete}
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
			<Button text="finalizar"/>
		</View>
	)
}


