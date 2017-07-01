import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";

import Login from "./screens/Login";
import Home from "./screens/Home";

const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
