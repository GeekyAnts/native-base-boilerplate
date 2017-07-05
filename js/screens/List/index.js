import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Text,
  View,
  Button,
  Toast,
  Content,
  Header,
  Title,
  Left,
  Body,
  Right,
  Icon,
  List,
  ListItem,
  Thumbnail
} from "native-base";

import styles from "./styles";

const list = [
  {
    name: "Steve Finnan",
    image: require("./../../../assets/list1.jpeg"),
    text: "This is a really nice photo"
  },
  {
    name: "Albert Riera",
    image: require("./../../../assets/list2.jpeg"),
    text: "This is a great list item."
  },
  {
    name: "Ryan Babel",
    image: require("./../../../assets/list3.jpeg"),
    text: "NativeBae lists are great. You gotta love."
  },
  {
    name: "Michael Owen",
    image: require("./../../../assets/list4.jpeg"),
    text: "React native FTW."
  },
  {
    name: "Sami Hypia",
    image: require("./../../../assets/list3.jpeg"),
    text: "You'll never walk alone."
  }
];

export default class ListPage extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Welcome!</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("We love you too!")}>
              <Icon name="heart" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <List
            dataArray={list}
            renderRow={item =>
              <ListItem avatar style={{ padding: 2 }}>
                <Left>
                  <Thumbnail
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={item.image}
                  />
                </Left>
                <Body>
                  <Text>
                    {item.name}
                  </Text>
                  <Text note>
                    {item.text}
                  </Text>
                </Body>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}
