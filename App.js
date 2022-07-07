import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Navagation from './src/navagations/navagation';
import ContextProvider from './src/context/context'

import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {

  useEffect(() => {


    GoogleSignin.configure({
      webClientId: '603856227554-obehhh9lsjp2h79a5s1meb3qkifp5sdr.apps.googleusercontent.com',
    });

  }, [])

  return (
    <ContextProvider>
      <Navagation />
    </ContextProvider>

  )
}
export default App;