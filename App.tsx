import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './src/types/navigation/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { ProductsProvider } from './src/context/ProductContext';
import CartScreen from './src/screens/CartScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { CartProvider } from './src/context/CartContext';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

const Tabs = createBottomTabNavigator<RootStackParamList>();

const HomeStack = createNativeStackNavigator<RootStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="ProductDetailScreen" 
        component={ProductDetailScreen} 
        options={{ title: '' }} 
      />
    </HomeStack.Navigator>
  );
}


export default function App() {
  return (
   <ProductsProvider>
    <CartProvider>
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='HomeScreen' component={HomeStackScreen} options={{
          headerShown: false,
           tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home" size={size} color={focused ? 'blue' : 'gray'}/>
            )}} />
           
          

        <Tabs.Screen name='CartScreen' component={CartScreen} options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size}) => (
            <Ionicons name='cart' size={size} color={focused ? 'blue' : 'gray'} />
          )}} />
        <Tabs.Screen name='SettingsScreen' component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
    </CartProvider>
  </ProductsProvider>
  );
}



