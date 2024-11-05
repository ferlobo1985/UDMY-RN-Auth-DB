import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

/// firebase
import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from "./firebaseConfig";

// SCREENS
import Home from './screens/home';
import SignIn from './screens/signIn';

const Drawer = createDrawerNavigator();
export default function App() {

  onAuthStateChanged(AUTH,(user)=>{
    console.log(user)
  })

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Auth" component={SignIn}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}