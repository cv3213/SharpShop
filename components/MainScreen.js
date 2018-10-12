import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MenuBar from './MenuBar';
import Feed from './Feed';
import Tap from './Tap';

const { width, height } = Dimensions.get('window');

export default class MainScreen extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }
  componentWillUnmount() {
    StatusBar.setHidden(true);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuBar />
        <Feed />
        <Tap />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
