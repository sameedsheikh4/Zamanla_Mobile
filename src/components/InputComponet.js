import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput } from 'react-native';
import { colors, FONTS } from '../Theme/theme';
import { GlobalContext } from "../context/context";
import VectorIcon from './VectorIcons';
import { useTheme } from '@react-navigation/native';
const InputComponet = ({
  labelText = 'null',
  placeholderText = '',
  onChangeText = null,
  BottomWidth = 2,
  value = null,
  IconSize = 20,
  elevation = 4,
  family = "FontAwesome5",
  iconName = "user-o",
  backgroundColor = 'transparent',
  borderBottomColor,
  style,
  mainView,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  caretHidden=false,
  textAlignVertical='center',
  ...more
}) => {
  const [isActive, setActive] = useState(false);
  const { state, dispatch } = useContext(GlobalContext);
  const { colors } = useTheme();

  return (
    <View style={{
      // flex: 1,
      alignItems: 'center',
      marginBottom: 10,
      //  height: 44,
      ...mainView
    }}>
      {
        labelText !== "null" ? (
          <Text style={{
            alignSelf: "flex-start",
            paddingLeft: iconName !== "null" ? 30 : 10,
            marginBottom: 4,
            fontWeight: "600",
            color: "black",
            textTransform: "capitalize"
          }}>
            {labelText}</Text>
        ) : null
      }


      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          elevation: isActive ? 0 : elevation,
          backgroundColor: colors.dropDownColor,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: isActive ? colors.active : colors.dropDownBorderColor,
          color: "#616161",
          height: 44,
          paddingLeft: 10,
          ...style,
          // marginBottom: 20,
        }}>

        {
          iconName !== "null" ? (

            <VectorIcon
              style={{}}
              name={iconName}
              size={IconSize}
              family={family}
              color="#000"
            />

          ) : null
        }

        <TextInput
          style={{
            paddingLeft: iconName !== "null" ? 30 : 5,
            flex: 1,
            borderColor: 'transparent',
            height:'100%',
             textAlignVertical: textAlignVertical

          }}
          numberOfLines={numberOfLines}
          multiline={multiline}

          placeholderTextColor="#616161"
          fontSize={FONTS.font12}
          fontWeight='bold'
          caretHidden={caretHidden}
          placeholder={placeholderText}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          onFocus={() => {
            setActive(true);
          }

          }
          onBlur={() => {

            setActive(false);
          }
          }
          value={value}
          {...more}
        />
      </View>
    </View>

  );
};

export default InputComponet;
