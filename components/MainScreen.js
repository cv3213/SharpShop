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
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <MenuBar navigate={navigate} />
        <Feed navigate={navigate} />
        <Tap navigate={navigate} />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
