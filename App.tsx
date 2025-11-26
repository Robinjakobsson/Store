import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { RootStackParamList } from './src/types/navigation/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

const Tabs = createNativeBottomTabNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='HomeScreen' component={HomeScreen} />
        
      </Tabs.Navigator>
    </NavigationContainer>
  );
}



