import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";

import { DrawerNavigationParamList } from "../Components/Navigation";
import { Search } from "../Search";

import Drawer, { DRAWER_WIDTH } from "./Drawer";

const DrawerNavigation = createDrawerNavigator<DrawerNavigationParamList>();

export const HomeDrawer = () => {
  return (
    <DrawerNavigation.Navigator
      initialRouteName="Search"
      drawerContent={(props) => <Drawer {...props} />}
      drawerStyle={style.drawerStyle}
    >
      <DrawerNavigation.Screen name="Search" component={Search} />
    </DrawerNavigation.Navigator>
  );
};

const style = StyleSheet.create({
  drawerStyle: {
    width: DRAWER_WIDTH,
  },
});