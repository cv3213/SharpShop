import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import SharpScreen from './components/SharpScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  Sharp: { screen: SharpScreen },
});

export default App;
