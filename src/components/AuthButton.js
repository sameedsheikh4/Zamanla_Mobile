import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import VectorIcon from './VectorIcons';
import { useTheme } from '@react-navigation/native';

const AuthButton = ({
  labelText = '',
  handleOnPress = null,
  style,
  fontsize=18,
  isPrimary = false,
  IconSize = 20,
  family = "FontAwesome5",
  iconName = "null",
  labelColor = 'white',
  iconColor = "#fff",
  elevation = 3,
  loader = false,
  disable = false,
  bgMain = 'transparent',
  boderMain = 'transparent',
  ...more
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 15,
        elevation: elevation,
        backgroundColor: bgMain,
        borderWidth: 1,
        borderColor: boderMain,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...style,

      }}
      activeOpacity={0.5}
      disabled={disable || loader}
      onPress={handleOnPress}
      {...more}>
      {
        iconName !== "null" ? (

          <VectorIcon
            style={{ marginRight: 10 }}
            name={iconName}
            size={IconSize}
            family={family}
            color={iconColor}
          />

        ) : null
      }
      <Text
        style={{
          textAlign: 'center',
          color: labelColor,
          fontSize:fontsize,
        }}>
        {labelText}
      </Text>
      {
        loader ? (
          <View style={{
            position: "absolute",
            zIndex: 10,
            backgroundColor: "#ffffff",
            opacity: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 1500,
            height: 100,
          }}>

            <ActivityIndicator size="small" color="#0000ff" />

          </View>
        ) : null
      }

    </TouchableOpacity>
  );
};

export default AuthButton;
