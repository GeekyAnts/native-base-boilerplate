import React from "react";
import { DrawerNavigator } from "react-navigation";
import { Root } from "native-base";

import SideBar from "./components/Sidebar";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Drawer from "./Drawer";
import List from "./screens/List";
import Card from "./screens/Card";

const AppNavigator = DrawerNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
