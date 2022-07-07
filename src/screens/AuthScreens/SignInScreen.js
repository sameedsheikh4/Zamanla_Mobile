

import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ToastAndroid

} from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { useTheme } from '@react-navigation/native';
import { FONTS } from '../../Theme/theme';
import AuthButton from '../../components/AuthButton';

const SignInScreen = ({ navigation }) => {
  const handleOnLogin = () => {
    navigation.navigate('SignInScreen')

  }
  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }
  const registerGoogle = () => {
    // postData()
    onGoogleButtonPress().then((d) => {
      // console.log(d, 'login Google!')
      ToastAndroid.show('Logged in succesfully', ToastAndroid.SHORT)
    })
      .catch((e) => {
        console.log(e, 'error Google!')

      })

  }
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-between'


      }}>
      <View style={styles.icon}>

        <Text style={styles.heading}>Giriş Yap</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>

          <Text style={styles.wrapperheading}>Tekrar Hoşgeldiniz</Text>
          <Text style={styles.wrapperText}>Merhaba, devam etmek için lütfen giriş yapin</Text>
        </View>
        <AuthButton
          labelText="Facebook ile Giriş Yap"
          bgMain='#3c66c4'
          iconName="facebook"
          family='FontAwesome'
          IconSize={18}
          elevation ={0}
          style={{ marginVertical: 25 }}
          handleOnPress={handleOnLogin}
          
          />
        <AuthButton
          labelText="Google ile Giriş Yap"
          bgMain='#cf4332'
          iconName="google"
          family='FontAwesome'
          IconSize={18}
          elevation ={0}
          handleOnPress={registerGoogle}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:"center",marginTop:10 }}>
          <Text style={{ marginVertical: 10 }}>
          Zaten bir hesabin varmi?
          </Text>
          <Text
            style={{ marginLeft: 4, color: colors.background }}
            onPress={() => navigation.navigate('SignUpScreen')}>
           Kayit Ol
          </Text>
        </View>
      </View>
    </SafeAreaView >
  )

}
export default SignInScreen;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: .45,
    paddingHorizontal: 30,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,

  },
  icon: {
    flex: .55,
    justifyContent: "flex-end"

  },
  heading: {
    fontSize: FONTS.font28,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 20,
    paddingBottom: 20

  },
  wrapperText: {
    fontSize: FONTS.font14,
    color: "grey",
    marginTop: 7
  },
  wrapperheading: {
    fontSize: FONTS.font22,
    fontWeight: "bold",
    color: "black",
  },
  textWrapper: {
    paddingTop: 35

  },
})