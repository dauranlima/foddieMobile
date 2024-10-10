import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import TabHome from "../screens/tab-home";
import TabFavoritos from "../screens/tab-favoritos";
import TabOrders from "../screens/tab-orders";
import TabProfile from "../screens/tab-profile";
import icons from "../constants/icons";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
				<Tab.Screen
					name="Home"
					component={TabHome}
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
					component={TabOrders}
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
					component={TabFavoritos}
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
					component={TabProfile}
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

  )
}