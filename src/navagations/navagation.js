import React,{useState,useEffect,useContext} from 'react';
import SplashScreen from  "react-native-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import { useColorScheme } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GlobalContext } from '../context/context';

import AppNavigator from './AppNavigator';

const Navagation = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const colorScheme = useColorScheme();
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(user," inuser");
    dispatch({ type: 'USER_LOGIN', payload: user });
    if (initializing) setInitializing(false);
  }


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    SplashScreen.hide();
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return SplashScreen.show();;
  const dark = {

    dark: true,
    colors: {
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      primary: '#2190BD',
      active: '#9DCADC',
      secondary: '#0783B6',
      text: '#888B8F',
      headerColor:'#2190BD',
      success: '#00C851',
      error: '#ff4444',
      black: '#000',
      white: '#2190BD',
      background:'blue',


    },
  };
  const light = {
    dark: false,
    colors: {
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      primary: '#2190BD',
      active: '#9DCADC',
      secondary: '#0783B6',
      text: '#888B8F',
      headerColor: '#2190BD',
      success: '#00C851',
      error: '#ff4444',
      dropDownColor: "white",
      dropDownBorderColor: "black",
      pageBg: "#E2EFF2",
      black: '#000',
      white: '#F1F1F1',
      background:'#549bf4',
      

    },
  };
  return (

      <NavigationContainer theme={colorScheme === 'dark' ? dark : light}>
        {user ? <AppNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>

  )
}
export default Navagation;