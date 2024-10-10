import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Register from "../screens/register";
import Register2 from "../screens/register2";

const Stack = createNativeStackNavigator();

export default function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Register"
					component={Register}
					options={{
						headerShadowVisible: false,
						title: "",
						headerBackTitle: "Voltar",
					}}
				/>
				<Stack.Screen
					name="Register2"
					component={Register2}
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
