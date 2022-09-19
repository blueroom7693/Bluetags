import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import Tabs from "./Tabs";
const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Tabs" component={Tabs}></Nav.Screen>
    <Nav.Screen name="Stack" component={Stack}></Nav.Screen>
  </Nav.Navigator>
);

export default Root;
