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
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    phoneNumber: '',
    name: '',
    birth: '',
    logoImage: require('../images/Sharp-shop_MINI-LOGO.png'),
    email: '',
    pw: '',
    pwConfirm: '',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.logoTop}>
        <StatusBar barStyle={'light-content'} />
        <Image source={this.state.logoImage} style={styles.logo} />
        <ScrollView style={styles.signInBack} overScrollMode={'always'}>
          <View style={{ height: 850 }}>
            <Text style={styles.NAME}>NAME</Text>
            <TextInput
              style={styles.name}
              onChangeText={value => this.setState({ name: value })}
              underlineColorAndroid={'transparent'}
              value={this.state.name}
              name={'name'}
            />
            <Text style={styles.BIRTH}>BIRTH</Text>
            <TextInput
              style={styles.birth}
              keyboardType={'numeric'}
              onChangeText={value => this.setState({ birth: value })}
              value={this.state.birth}
              name={'birth'}
            />
            <Text style={styles.PN}>P/N</Text>
            <TextInput
              style={styles.phoneNumber}
              keyboardType={'numeric'}
              onChangeText={value => this.setState({ phoneNumber: value })}
              value={this.state.phoneNumber}
              name={'phoneNumber'}
            />
            <Text style={styles.EMAIL}>EMAIL</Text>
            <TextInput
              style={styles.email}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({ email: value })}
              value={this.state.email}
              name={'email'}
            />
            <Text style={styles.PW}>P/W</Text>
            <TextInput
              style={styles.pw}
              secureTextEntry={true}
              onChangeText={value => this.setState({ pw: value })}
              value={this.state.pw}
              name={'pw'}
            />
            <Text style={styles.PWCON}>P/W CONFIRM</Text>
            <TextInput
              style={styles.pwConfirm}
              secureTextEntry={true}
              onChangeText={value => this.setState({ pwConfirm: value })}
              value={this.state.pwConfirm}
              name={'pwConfirm'}
            />
            <TouchableOpacity onPress={() => navigate('SignUp')}>
              <View>
                <Text style={styles.signUp}>sign up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <View>
                <Text style={styles.cancel}>cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoTop: {
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 160,
    marginLeft: 125,
    marginTop: 20,
  },
  signInBack: {
    backgroundColor: '#FF7563',
    height: height - 160,
  },
  name: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  birth: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  phoneNumber: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
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
    marginTop: 5,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  pwConfirm: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  email: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    fontSize: 15,
    fontWeight: '300',
    backgroundColor: 'white',
  },

  apply: {
    borderRadius: 10,
    width: 80,
    fontSize: 15,
    color: '#FF7563',
    backgroundColor: 'white',
    marginTop: 100,
    marginLeft: 230,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  NAME: {
    color: 'white',
    fontSize: 14,
    marginLeft: 50,
    marginTop: 75,
  },
  BIRTH: {
    color: 'white',
    fontSize: 14,
    marginLeft: 50,
    marginTop: 15,
  },
  PN: {
    color: 'white',
    fontSize: 14,
    marginLeft: 50,
    marginTop: 15,
  },
  EMAIL: {
    color: 'white',
    fontSize: 14,
    marginLeft: 50,
    marginTop: 15,
  },
  PW: {
    color: 'white',
    fontSize: 14,
    marginLeft: 50,
    marginTop: 15,
  },
  PWCON: {
    color: 'white',
    fontSize: 14,
    marginLeft: 50,
    marginTop: 15,
  },
  signUp: {
    fontSize: 30,
    fontWeight: '300',
    color: '#FF7563',
    backgroundColor: 'white',
    width: 260,
    marginLeft: 50,
    paddingLeft: 82,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 60,
    borderRadius: 10,
  },
  cancel: {
    fontSize: 30,
    fontWeight: '300',
    color: 'white',
    backgroundColor: '#FF7563',
    width: 260,
    paddingLeft: 82,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 51,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
});
