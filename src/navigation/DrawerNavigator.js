import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen/FavoriteScreen";
import MovieScreen from "../screens/MovieScreen/MovieScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";

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
        }}
      >
        <Drawer.Screen name="Início" component={HomeScreen}/>
        <Drawer.Screen name="Favoritos" component={FavoriteScreen}/>
        <Drawer.Screen name="Filme" component={MovieScreen} 
        options={{
          headerShown: false,
          drawerItemStyle:{display: "none"}}}/>
        <Drawer.Screen name="Pesquisar" component={SearchScreen}
        options={{
          headerShown: false
        }}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
