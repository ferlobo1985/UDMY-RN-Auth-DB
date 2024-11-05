import { NavigationContainer } from "@react-navigation/native";
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
 } from "@react-navigation/drawer";

/// firebase
import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from "./firebaseConfig";

// SCREENS
import Home from './screens/home';
import SignIn from './screens/signIn';
import { useState } from "react";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      { props.user &&
        <DrawerItem label="Sign out" onPress={()=>AUTH.signOut()}/>
      }
    </DrawerContentScrollView>
  )
}

export default function App() {
  const [user,setUser] = useState(null)

  onAuthStateChanged(AUTH,(user)=>{
    if(user){ setUser(user) }
    else { setUser(null)}
  })

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props)=>
          <CustomDrawerContent {...props} user={user}/>
        }
      >
        <Drawer.Screen name="Home" component={Home}/>
        { !user &&
          <Drawer.Screen name="Auth" component={SignIn}/>
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}