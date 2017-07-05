import React, { Component } from "react";
import { Image, ListView } from "react-native";
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
  Card,
  CardItem,
  Thumbnail
} from "native-base";

import styles from "./styles";

const list = [
  {
    thumbnail: require("./../../../assets/list1.jpeg"),
    image: require("./../../../assets/card1.jpeg"),
    name: "Cute pig",
    note: "Really cool!"
  },
  {
    thumbnail: require("./../../../assets/list2.jpeg"),
    image: require("./../../../assets/card2.jpeg"),
    name: "Kind women",
    note: "Hard to find!"
  },
  {
    thumbnail: require("./../../../assets/list3.jpeg"),
    image: require("./../../../assets/card3.jpeg"),
    name: "Cute Pig",
    note: "Not really!"
  }
];

export default class CardsPage extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(list)
    };
  }
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
            <Title>Card Example</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("We love you too!")}>
              <Icon name="heart" />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1 }}>
          <ListView
            dataSource={this.state.dataSource}
            contentContainerStyle={{ padding: 5 }}
            renderRow={data =>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={data.thumbnail} />
                    <Body>
                      <Text>
                        {data.name}
                      </Text>
                      <Text note>
                        {data.note}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={data.image}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>}
          />
        </View>
      </Container>
    );
  }
}
