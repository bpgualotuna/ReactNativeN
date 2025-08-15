import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
    </View>
  );
}

function TabProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab Profile</Text>
    </View>
  );
}


function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={TabHomeScreen} options={{headerShown:false, tabBarLabel: 'Inicio' }} />
      <Tab.Screen name="ProfileTab" component={TabProfileScreen} options={{headerShown:false, tabBarLabel: 'Perfil' }} />
    </Tab.Navigator>
  );
}

// Pantalla simple para el Drawer
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings"  component={SettingsScreen} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
