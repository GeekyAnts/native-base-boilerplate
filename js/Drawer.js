import React from "react";
import { StackNavigator } from "react-navigation";

import SideBar from "./components/Sidebar";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Drawer = StackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home"
  }
);

export default () => <Drawer />;
