import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MovieScreen from "../screens/MovieScreen/MovieScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ActorScreen from "../screens/ActorScreen/ActorScreen";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "+Moovie",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#5D3CF0",
          },
          drawerStyle: {
            backgroundColor: "#000",
          },
          drawerLabelStyle: {
            color: "white", 
          },
        }}
      >
        <Drawer.Screen name="Início" component={HomeScreen}/>
        <Drawer.Screen name="Filme" component={MovieScreen} 
        options={{
          drawerItemStyle:{display: "none"}}}/>
        <Drawer.Screen name="Pesquisar" component={SearchScreen}/>
         <Drawer.Screen name="Actor" component={ActorScreen}
        options={{
          drawerItemStyle:{display: "none"}
        }}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
