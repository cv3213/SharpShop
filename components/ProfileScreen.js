import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'} />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
