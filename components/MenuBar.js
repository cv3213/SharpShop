import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class MenuBar extends Component {
  state = {
    imageMenu: require('../images/Sharp-shop_menu_bar.png'),
    imageProfile: require('../images/Sharp-shop_profile.png'),
    imageSharp: require('../images/Sharp-shop_MINI-LOGO.png'),
  };

  render() {
    const { navigate } = this.props;
    return (
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.hairlineRight}>
          <Image source={this.state.imageMenu} style={styles.imageMenu} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.hairlineSide}
          onPress={() => {
            navigate('Sharp');
          }}>
          <Image source={this.state.imageSharp} style={styles.imageSharp} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.hairlineLeft}
          onPress={() => {
            navigate('Profile');
          }}>
          <Image source={this.state.imageProfile} style={styles.imageProfile} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topMenu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 100,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imageMenu: {
    flex: 1,
    width: 50,
    height: 50,
    marginRight: 25,
    marginLeft: 25,
  },
  imageSharp: {
    flex: 1,
    width: 65,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  imageProfile: {
    flex: 1,
    width: 65,
    height: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  hairlineLeft: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: 'gray',
  },
  hairlineRight: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: 'gray',
  },
  hairlineSide: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: 'gray',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: 'gray',
  },
});
