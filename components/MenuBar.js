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
    return (
      <View style={styles.topMenu}>
        <TouchableOpacity>
          <Image source={this.state.imageMenu} style={styles.imageMenu} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={this.state.imageSharp} style={styles.imageSharp} />
        </TouchableOpacity>
        <TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: height - 250,
  },
  imageMenu: {
    flex: 1,
    width: 50,
    height: 50,
    marginRight: 52,
  },
  imageSharp: {
    flex: 1,
    width: 50,
    height: 50,
    marginLeft: 52,
    marginRight: 52,
  },
  imageProfile: {
    flex: 1,
    width: 50,
    height: 50,
    marginLeft: 52,
  },
});
