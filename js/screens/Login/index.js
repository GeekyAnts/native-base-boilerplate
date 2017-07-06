import React, { Component } from "react";
import { Image, Animated, Keyboard, Platform } from "react-native";
import {
  Container,
  Text,
  View,
  Form,
  Item,
  Label,
  Input,
  Button,
  Toast,
  Content
} from "native-base";

import styles from "./styles";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined
    };
    this.height = new Animated.Value(220);
    this.width = new Animated.Value(220);
    this.top = new Animated.Value(30);
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(this.height, {
        toValue: 140,
        duration: 300
      }),
      Animated.timing(this.width, {
        toValue: 140,
        duration: 300
      }),
      Animated.timing(this.top, {
        toValue: Platform.OS === "ios" ? 90 : 0,
        duration: 300
      })
    ]).start();
  };

  _keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(this.height, {
        toValue: 220,
        duration: 300
      }),
      Animated.timing(this.width, {
        toValue: 220,
        duration: 300
      }),
      Animated.timing(this.top, {
        toValue: 30,
        duration: 300
      })
    ]).start();
  };
  login() {
    if (!this.state.username || !this.state.password) {
      Toast.show({
        text: "Username/password cannot be empty!",
        type: "danger",
        duration: 2500
      });
    } else this.props.navigation.navigate("Drawer");
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content
          bounces={false}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-around"
          }}
        >
          <Animated.Image
            source={require("./../../../assets/react.png")}
            style={[
              styles.logo,
              {
                height: this.height,
                width: this.width,
                top: this.top
              }
            ]}
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
        </Content>
      </Container>
    );
  }
}
