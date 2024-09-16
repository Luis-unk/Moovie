import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen.js/FavoriteScreen";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "+Moovie",
          headerStyle: {
            backgroundColor: "#5D3CF0",
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Favoritos" component={FavoriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
