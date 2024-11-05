import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// SCREENS
import Home from './screens/home';
import SignIn from './screens/signIn';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Sign in" component={SignIn}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}