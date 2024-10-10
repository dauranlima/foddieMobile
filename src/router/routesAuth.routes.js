import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from ".";
import Menu from "../screens/menu";
import Search from "../screens/search";
import ProdDetails from "../screens/prodDetails";
import OrderDetails from "../screens/orderDetails";
import Checkout from "../screens/checkout";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/theme";


const Stack = createNativeStackNavigator();

export default function RoutesAuth(props) {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={Main}
					options={{ headerShown: false }}
				/>
			<Stack.Screen
					name="Checkout"
					component={Checkout}
					options={{
						headerShown: true,
						headerShadowVisible: true,
						headerTitleAlign:'center',
						headerBackTitle: "Voltar",
						title: "My Checkout",
						animation:"ios",
						headerRight:()=>{
							return<TouchableOpacity onPress={()=>alert('clicou limpar')}>
									<Text style={{color:COLORS.red}}>Limpar</Text>
							</TouchableOpacity>
						}
					}}
				/>
			<Stack.Screen
					name="OrderDetails"
					component={OrderDetails}
					options={{
						headerShown: true,
						headerShadowVisible: true,
						headerTitleAlign:'center',
						headerBackTitle: "Voltar",
						title: "Order Details",
						animation:"slide_from_bottom",
					}}
				/>
			<Stack.Screen
					name="ProdDetails"
					component={ProdDetails}
					options={{
						headerShown: false,
						headerShadowVisible: false,
						title: "",
					}}
				/>
				<Stack.Screen
					name="Menu"
					component={Menu}
					options={{
						headerShown: false,
						headerShadowVisible: false,
						title: "",
					}}
				/>
								<Stack.Screen
					name="Search"
					component={Search}
					options={{
						headerShown: false,
						headerShadowVisible: false,
						title: "",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
