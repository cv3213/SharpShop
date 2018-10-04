import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  componentWillMount() {
    StatusBar.setHidden(true);
  }
  static navigationOptions = {
    header: null,
  };

  state = {
    isLogin: false,
    isLoading: false,
    logoImage: require('../images/Sharp-shop_LOGO.png'),
  };
  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.isLogin) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <Image
            source={this.state.logoImage}
            style={{ width: 250, height: 300 }}
          />
          <View style={styles.signSet}>
            <TouchableOpacity onPress={() => navigate('SignIn')}>
              <View>
                <Text style={styles.signIn}>sign in</Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: 50 }} />
            <TouchableOpacity onPress={() => navigate('SignUp')}>
              <View>
                <Text style={styles.signUp}>sign up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 70,
  },
  signSet: {
    margin: 20,
  },
  signIn: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FF7563',
    backgroundColor: 'white',
    width: 220,
    paddingLeft: 65,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#FF7563',
  },
  signUp: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#FF7563',
    width: 220,
    paddingLeft: 60,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 30,
    borderRadius: 20,
  },
});
