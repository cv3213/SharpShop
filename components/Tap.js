import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Tap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.tapView} />;
  }
}

const styles = StyleSheet.create({
  tapView: {
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'gray',
    height: 50,
  },
});
