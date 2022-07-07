
import React from "react";

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'


const VectorIcons = ({ family, name, ...props }) => {
  let Family;

  switch (family) {
    case "AntDesign":
      Family = AntDesign;
      break;
    case "Entypo":
      Family = Entypo;
      break;
    case "EvilIcons":
      Family = EvilIcons;
      break;
    case "Feather":
      Family = Feather;
      break;
    case "FontAwesome":
      Family = FontAwesome;
      break;
    case "FontAwesome5":
      Family = FontAwesome5;
      break;
    case "Fontisto":
      Family = Fontisto;
      break;
    case "Foundation":
      Family = Foundation;
      break;
    case "Ionicons":
      Family = Ionicons;
      break;
    case "MaterialCommunityIcons":
      Family = MaterialCommunityIcons;
      break;
    case "MaterialIcons":
      Family = MaterialIcons;
      break;
    case "Octicons":
      Family = Octicons;
      break;
    case "SimpleLineIcons":
      Family = SimpleLineIcons;
      break;
    case "Zocial":
      Family = Zocial;
      break;
    default:
      Family = Ionicons;
  }

  return (
    <Family
      name={name ? name : "help-outline"}
      color={"#000"}
      size={20}
      {...props}
    />
  );
};

export default VectorIcons;