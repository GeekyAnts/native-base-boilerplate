import React from "react";
import { StackNavigator } from "react-navigation";

import SideBar from "./components/Sidebar";
import Login from "./screens/Login";
import Home from "./screens/Home";
import List from "./screens/List";
import Card from "./screens/Card";

const Drawer = StackNavigator(
  {
    List: { screen: List },
    Card: { screen: Card }
  },
  {
    initialRouteName: "Home"
  }
);

export default () => <Drawer />;
