

import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,


} from 'react-native';
const SettingScreen = ({ navigation }) => {
    return(
        <View style={styles.mainView}>
            <Text>
            SettingScreen
            </Text>
        </View>
    )

}
export default SettingScreen;
const styles = StyleSheet.create({
    mainView: {
      backgroundColor: "white",
  
    },
  })