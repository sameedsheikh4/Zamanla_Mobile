

import React, { useState, useContext } from 'react';
import {
    Text,
    View,
    SafeAreaView ,
    StyleSheet,
    Image

} from 'react-native';


import { useTheme } from '@react-navigation/native';
import { FONTS } from '../../Theme/theme';
import AuthButton from '../../components/AuthButton';
const AuthScreen = ({ navigation }) => {
    const handleOnLogin = () => {
        navigation.navigate('SignInScreen')
        
    }
    const handleOnRegister = () => {
        navigation.navigate('SignUpScreen')
    
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
                <Image
                    style={styles.image}
                    source={require('../../Asset/Images/Icon/Icon.png')}
                />

            </View>
            <View style={styles.wrapper}>
                <Text style={styles.heading}>Hoşgeldiniz</Text>
                <Text style={styles.wrapperText}>Zamanla Kazan</Text>
                <AuthButton 
                 labelText="Giriş Yap"
                 bgMain='white'
                 labelColor={colors.background}
                 style={{marginVertical:25}}
                 handleOnPress={handleOnLogin}

                />
                <AuthButton 
                 labelText="Kayit Ol"
                 boderMain='white'
                 elevation = {0}
                 handleOnPress={handleOnRegister}
                />

            </View>
        </SafeAreaView >
    )

}
export default AuthScreen;
const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: "red",
        flex: .4,
        paddingHorizontal:30,

    },
    icon: {
        flex: .6,
        alignItems: "center",
        justifyContent: "center"

    },
    image: {
        width: 180,
        height: 180,

    },
    wrapperText: {
       fontSize:FONTS.font20,
       color:"white",
       marginTop:15


    },
    heading: {
       fontSize:FONTS.font28,
       fontWeight:"bold",
       color:"white",
       letterSpacing:4

    },
})