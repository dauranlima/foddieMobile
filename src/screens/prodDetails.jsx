import { View, Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { styles } from "../styles/prodDetails.style";
import icons from "../constants/icons";
import Button from "../components/button";

export default function ProdDetails(props) {
	return (
		<View style={styles.container}>
			<View style={styles.containerFoto}>
				<Image
					style={styles.foto}
					resizeMode="cover"
					source={icons.pizza}
				/>
			</View>
			<TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
				<Image source={icons.back2} style={styles.icon} />
			</TouchableOpacity>
			<View style={styles.header}>
				<View style={styles.texts}>
					<Text style={styles.name}>Pizza de Calabresa</Text>
					<Text style={styles.descricao}>
						Massa Artesanal, mussarela e calabrasa. 
						Serve de 3 a 4 pessoas. Molho e tomate 100% natural e com 
						ingredientes selecionados.
					</Text>
					<Text style={styles.valor}>R$ 30,00</Text>
				<View>
					<Text style={styles.descricao}>Observações</Text>
					<TextInput placeholder="Ex: sem cebola, sem azeitonas..." multiline={true} numberOfLines={2} style={styles.textArea}/>
				</View>
				</View>
			</View>
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.footer} >
					<TouchableOpacity>
						<Image style={styles.imgQtde} source={icons.menos}/>
					</TouchableOpacity>
					<Text style={styles.qtde}>01</Text>
					<TouchableOpacity>
						<Image style={styles.imgQtde} source={icons.mais}/>
					</TouchableOpacity>
					<View style={styles.footerBtn} >
						<Button text='Inserir'/>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}
