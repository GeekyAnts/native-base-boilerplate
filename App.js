import * as Expo from "expo";
import React, { Component } from "react";
import NativeBaseBoilerplate from "./js/App";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isReady: false,
		};
	}
	async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		});
		this.setState({ isReady: true });
	}
	render() {
		if (!this.state.isReady) {
			return <Expo.AppLoading />;
		}
		return <NativeBaseBoilerplate />;
	}
}
