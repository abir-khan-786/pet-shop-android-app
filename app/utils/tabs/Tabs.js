import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePages from '../../pages/Home'
import ProductPages from '../../pages/Product'
import Ionicons from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomePages}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="shopping-bag" color={color} size={26} />
          ),
        }}
        name="Buy Pet"
        component={ProductPages}
      />
    </Tab.Navigator>
  )
}
