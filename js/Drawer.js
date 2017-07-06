import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "./components/Sidebar";
import Login from "./screens/Login";
import Home from "./screens/Home";
import List from "./screens/List";
import Card from "./screens/Card";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;
