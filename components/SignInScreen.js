import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    logoImage: require('../images/Sharp-shop_MINI-LOGO.png'),
    autoLogin: false,
    id: '',
    pw: '',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.logoTop}>
        <StatusBar barStyle={'light-content'} />
        <Image source={this.state.logoImage} style={styles.logo} />
        <View style={styles.signInBack}>
          <TextInput
            style={styles.id}
            placeholder={'ID'}
            placeholderTextColor={'#FF7563'}
            underlineColorAndroid={'#ffffff'}
            onChangeText={value => this.setState({ id: value })}
            value={this.state.id}
            name={'id'}
          />
          <TextInput
            style={styles.pw}
            secureTextEntry={true}
            placeholder={'P/W'}
            placeholderTextColor={'#FF7563'}
            onChangeText={value => this.setState({ pw: value })}
            value={this.state.pw}
            name={'pw'}
          />
          <TouchableOpacity onPress={() => navigate('Main')}>
            <View>
              <Text style={styles.signin}>sign in</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <View>
              <Text style={styles.signUp}>sign up</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={BackHandler.exitApp}>
            <View>
              <Text style={styles.Quit}>Quit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoTop: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 160,
    marginLeft: 120,
    marginTop: 10,
  },
  signInBack: {
    backgroundColor: '#FF7563',
    height: height - 160,
  },
  id: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  pw: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  signUp: {
    fontSize: 30,
    fontWeight: '300',
    color: '#FF7563',
    backgroundColor: 'white',
    width: 263,
    paddingLeft: 80,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginLeft: 48,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#FF7563',
  },
  Quit: {
    fontSize: 30,
    fontWeight: '300',
    color: '#FFF',
    backgroundColor: '#FF7563',
    width: 263,
    paddingLeft: 100,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginLeft: 48,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#FFFF',
  },
  signin: {
    fontSize: 30,
    fontWeight: '300',
    color: '#FFF',
    backgroundColor: '#F75252',
    width: 263,
    paddingLeft: 80,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 55,
    marginLeft: 48,
    borderWidth: 1,
    borderRadius: 20,
  },
});
