import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "../styles/menu.style";
import { restaurante } from "../constants/dados";
import icons from "../constants/icons";
import Produto from "../components/produto";

export default function Menu() {
	return (
		<View style={styles.container}>
			<View style={styles.containerFoto}>
				<Image
					style={styles.foto}
					resizeMode="contain"
					source={restaurante.foto}
				/>
			</View>
			<TouchableOpacity style={styles.containerBack}>
				<Image source={icons.back2} style={styles.icon} />
			</TouchableOpacity>
			<View style={styles.header}>
				<View style={styles.texts}>
					<Text style={styles.resName}>Nome do estabelicimento</Text>
					<Text style={styles.resTax}>Taxa de Entrega</Text>
				</View>
				<Image source={icons.favoritoFull2} style={styles.iconFav} />
			</View>
			<View style={styles.header}>
				<Image source={icons.location} style={styles.locationImg} />
				<Text style={styles.location}>
					Rua president Castro Ricardo Rui barbosa , 512, Centro - Cascavel PR
				</Text>
			</View>
			<ScrollView>
				{restaurante.cardapio.map((item) => {
					return (
						<View style={styles.containerCardapio} key={item.idCategoria}>
							<Text style={styles.categoria}>{item.categoria}</Text>
							{item.itens.map((prod) => {
								return (
                  <>
									<Produto
										key={prod.idProduto}
										foto={prod.foto}
										name={prod.nome}
										description={prod.descricao}
										price={prod.valor}
                    />
                  </>
								);
							})}
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
}
