import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, useColorScheme, Button } from "react-native";
import Article from "../screens/Article";
import Root from "./Root";
import { BLACK_COLOR } from "../colors";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Drawer.Navigator
      useLegacyImplementation
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: BLACK_COLOR,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : BLACK_COLOR,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Root} />
      <Drawer.Screen name="Setting" component={Article} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
