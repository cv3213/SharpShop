import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import MainScreen from './components/MainScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
  Main: { screen: MainScreen },
});

export default App;
