import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Text, View, Button, Content, Icon } from "native-base";

import styles from "./styles";

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Content padder bounces={false}>
          <Image
            source={require("./../../../assets/nativebase.png")}
            style={styles.image}
          />
        </Content>
      </Container>
    );
  }
}
