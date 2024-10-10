import { Image } from "react-native";
import Home from "./screens/home";
import Favoritos from "./screens/favoritos";
import Orders from "./screens/orders";
import Profile from "./screens/profile";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "./constants/icons";

const Tab = createBottomTabNavigator();

export default function RoutesAuth() {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
						tabBarIcon: ({ focused }) => {
							return (
								<Image
									source={icons.abaHome}
									style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
								/>
							);
						},
						tabBarLabel: "Início",
					}}
				/>
				<Tab.Screen
					name="Orders"
					component={Orders}
					options={{
						headerShown: true,
						headerTitleAlign: "center",
						title: "My Orders",
						headerShadowVisible: false,
						tabBarIcon: ({ focused }) => {
							return (
								<Image
									source={icons.abaPedidos}
									style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
								/>
							);
						},
						tabBarLabel: "Pedidos",
					}}
				/>
				<Tab.Screen
					name="Favoritos"
					component={Favoritos}
					options={{
						headerShown: true,
						headerTitleAlign: "center",
						headerShadowVisible: false,
						tabBarIcon: ({ focused }) => {
							return (
								<Image
									source={icons.abaFavorito}
									style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
								/>
							);
						},
						tabBarLabel: "Favorito",
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						headerShown: true,
						headerTitleAlign: "center",
						title: "My Profile",
						headerShadowVisible: false,
						tabBarIcon: ({ focused }) => {
							return (
								<Image
									source={icons.abaPerfil}
									style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
								/>
							);
						},
						tabBarLabel: "Perfil",
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
