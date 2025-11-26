import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './src/types/navigation/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { ProductsProvider } from './src/context/ProductContext';
import CartScreen from './src/screens/CartScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tabs = createBottomTabNavigator<RootStackParamList>();


export default function App() {
  return (
   <ProductsProvider>
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
        <Tabs.Screen name='CartScreen' component={CartScreen} />
        <Tabs.Screen name='SettingsScreen' component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  </ProductsProvider>
  );
}



