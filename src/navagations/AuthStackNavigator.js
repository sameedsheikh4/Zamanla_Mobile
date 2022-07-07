import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import SignInScreen from '../screens/AuthScreens/SignInScreen';
import AuthScreen from '../screens/AuthScreens/AuthScreen';


const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
       
      }}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} 
       options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen name="SignInScreen" component={SignInScreen} 
       options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} 
       options={{ cardStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
