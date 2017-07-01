import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Text,
  View,
  Form,
  Item,
  Label,
  Input,
  Button,
  Toast
} from "native-base";

import styles from "./styles";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined
    };
  }
  login() {
    if (!this.state.username || !this.state.password) {
      Toast.show({
        text: "Username/password cannot be empty!",
        type: "danger",
        duration: 2500
      });
    } else
      this.props.navigation.navigate("Home", { name: this.state.username });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Image
          source={require("./../../../assets/react.png")}
          style={styles.logo}
        />
        <Form style={styles.form}>
          <Item underline>
            <Input
              onChangeText={username => this.setState({ username })}
              placeholder="Username"
            />
          </Item>
          <Item underline>
            <Input
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
            />
          </Item>
          <Button full style={styles.button} onPress={() => this.login()}>
            <Text>Login</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
