import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuBar from './MenuBar';
import Tap from './Tap';
import Feed from './Feed';

export default class SharpScreen extends Component {
  render() {
    return (
      <View>
        <MenuBar />
        <Feed />
        <Tap />
      </View>
    );
  }
}
