import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "./components/Sidebar";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home }
  },
  {
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default () => <Drawer />;
