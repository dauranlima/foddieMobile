import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/login";
import Registro from "./screens/registro";
import Registro2 from "./screens/registro2";
import Search from "./components/search";
import Menu from "./screens/menu";

const Stack = createNativeStackNavigator();

export default function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Menu"
					component={Menu}
					options={{
						headerShown: false,
						headerShadowVisible: false,
						headerBackTitle: "Voltar",
						headerTitleAlign: "center",
						title: "Menu",
					}}
				/>
				<Stack.Screen
					name="Search"
					component={Search}
					options={{
						headerShown: true,
						headerShadowVisible: false,
						headerBackTitle: "Voltar",
						headerTitleAlign: "center",
						title: "Resultado da Busca",
					}}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Registro"
					component={Registro}
					options={{
						headerShadowVisible: false,
						title: "",
						headerBackTitle: "Voltar",
					}}
				/>
				<Stack.Screen
					name="Registro2"
					component={Registro2}
					options={{
						headerShadowVisible: false,
						title: "",
						headerBackTitle: "Voltar",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
