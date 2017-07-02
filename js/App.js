import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";

import Login from "./screens/Login";
import Drawer from "./Drawer";

const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
