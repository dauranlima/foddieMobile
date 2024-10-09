import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login';
import Registro from './screens/registro';
import Registro2 from './screens/registro2';
import Home from './screens/home';
import Favoritos from './screens/favoritos';
import Orders from './screens/orders';
import Profile from './screens/profile';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator  >
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: true, headerTitleAlign: 'center', title:'My Profile', headerShadowVisible:false}}/>
      <Stack.Screen name="Orders" component={Orders} options={{headerShown: true, headerTitleAlign: 'center', title:'My Orders', headerShadowVisible:false}}/>
      <Stack.Screen name="Favoritos" component={Favoritos} options={{headerShown: true, headerTitleAlign: 'center', headerShadowVisible:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Registro" component={Registro} options={{headerShadowVisible:false , title:'', headerBackTitle: 'Voltar'}} />
      <Stack.Screen name="Registro2" component={Registro2} options={{headerShadowVisible:false , title:'', headerBackTitle: 'Voltar'}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}