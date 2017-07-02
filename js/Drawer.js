import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "./components/Sidebar";
import Home from "./screens/Home";

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

export default () => <Drawer />;
