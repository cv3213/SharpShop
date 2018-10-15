import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Tap extends Component {
  state = {
    imageSetting: require('../images/Sharp-shop_setting.png'),
    imageWrite: require('../images/Sharp-shop_write.png'),
  };

  render() {
    return (
      <View style={styles.tapView}>
        <TouchableOpacity style={styles.hairlineRight}>
          <Image source={this.state.imageSetting} style={styles.imageSetting} />
        </TouchableOpacity>
        <View style={{ width: 220 }} />
        <TouchableOpacity style={styles.hairlineLeft}>
          <Image source={this.state.imageWrite} style={styles.imageWrite} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tapView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'gray',
    height: 50,
  },
  imageSetting: {
    flex: 1,
    height: 50,
    width: 65,
  },
  imageWrite: {
    flex: 1,
    height: 50,
    width: 65,
  },
  hairlineRight: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: 'gray',
  },
  hairlineLeft: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: 'gray',
  },
});
