import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Text,
  View,
  Button,
  Content,
  Icon,
  List,
  ListItem,
  Left,
  Right,
  Badge
} from "native-base";

import styles from "./styles";

const datas = [
  {
    name: "List Example",
    route: "List",
    icon: "list"
  },
  {
    name: "Card Example",
    route: "Card",
    icon: "card"
  },
  {
    name: "Logout",
    route: "Login",
    icon: "log-out"
  }
];
export default class Sidebar extends Component {
  render() {
    console.log(this.props.navigation);
    return (
      <Container>
        <Content bounces={false}>
          <Image
            source={require("./../../../assets/nativebase.png")}
            style={styles.image}
          />
          {datas.map((data, i) =>
            <ListItem
              button
              key={i}
              noBorder
              onPress={() => this.props.navigation.navigate(data.route)}
            >
              <Left>
                <Icon
                  active
                  name={data.icon}
                  style={{ color: "#777", fontSize: 26, width: 30 }}
                />
                <Text style={styles.text}>
                  {data.name}
                </Text>
              </Left>
            </ListItem>
          )}
        </Content>
      </Container>
    );
  }
}
