

import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image


} from 'react-native';

import CustomHeader from '../../components/CustomHeader';

import VectorIcons from '../../components/VectorIcons';
import { FONTS } from '../../Theme/theme';
const HomeScreen = ({ navigation }) => {
  let data = [
    {
      title: "1st person Gift",
      points: 100,
      rating: 7,
      image: "",
      gift: "handfree"
    },
    {
      title: "2nd person Gift",
      points: 100,
      rating: 3,
      image: "",
      gift: "mobile"
    },
    {
      title: "2nd person Gift",
      points: 100,
      rating: 3,
      image: "",
      gift: "ipad"
    },
    {
      title: "2nd person Gift",
      points: 100,
      rating: 3,
      image: "",
      gift: "watches"
    },

  ]
  return (
    <SafeAreaView style={styles.mainView}>
      <CustomHeader />
      <View style={styles.Wrapper}>

        <View style={styles.mainViewTop}>
          <Text style={styles.heading}>
            Total Usage Time
          </Text>
          <Text style={styles.headingText}>
            10h 53 min
          </Text>
        </View>
        <View style={[styles.mainViewTop,{marginVertical:10}]}>
          <Text style={styles.heading}>
            Social Media Usage Time
          </Text>
          <Text style={styles.headingText}>
            3h 14 min
          </Text>
        </View>
        <View style={styles.Rated}>
          <Text style={styles.heading}>
            Rate : 700
          </Text>
          <View style={[styles.RatedIconView, { marginLeft: 10 }]}>
            <VectorIcons name="like1" family={'AntDesign'} style={[styles.RatedIcon, {}]} color={'white'} size={15} />

          </View>
          <View style={[styles.RatedIconView, { marginLeft: 10, backgroundColor: "#f8be00", }]}>
            <VectorIcons name="dislike1" family={'AntDesign'} style={[styles.RatedIcon, {}]} color={'white'} size={15} />

          </View>

          <View style={[styles.RatedIconView, { marginLeft: 10, backgroundColor: "red", }]}>
            <VectorIcons name="dislike1" family={'AntDesign'} style={[styles.RatedIcon, {}]} color={'white'} size={15} />

          </View>

        </View>
        <View style={styles.Battery}>
        <View style={styles.BatteryBox}></View>

        </View>
        <View style={styles.iconConv}>

          <Image
            style={styles.image}
            source={require('../../Asset/Images/Icon/Icon.png')}
          />
        </View>
        <TouchableOpacity style={styles.Btn2xWrapper}>
            <Image
              style={styles.image}
              source={require('../../Asset/Images/Icon/Icon.png')}
            />
            <Text style={styles.Btn2xText}>
              2x Zaman
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn2xWrapper,{marginTop:20,backgroundColor:"#52be80"}]}>
            <Image
              style={styles.image}
              source={require('../../Asset/Images/Icon/Icon.png')}
            />
            <Text style={styles.Btn2xText}>
            IZLE KAZAN
            </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )

}
export default HomeScreen;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fafbff",

  },
  Wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  mainViewTop: {
    alignItems: "center",
    justifyContent: "center",
    },
  Rated: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop:10,
  },
  RatedIcon: {
    //  marginRight:10,
    //  padding:2,



  },
  RatedIconView: {
    backgroundColor: "#005dcc",
    height: 30,
    width: 30,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  Battery: {
    borderWidth: 4,
    borderColor:"grey",
    height: 60,
    width: '60%',
    backgroundColor: "#90f489",
    marginVertical: 20,
    elevation:5,
    position:"relative"
  },
  BatteryBox: {
    position:"absolute",
    backgroundColor:"grey",
    height: 40,
    width:7,
    right:-9,
    bottom:7,
    borderRadius:100,
  },
  HeadingWrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heading: {
    fontSize: FONTS.font20,
    fontWeight: "bold",
    color: "black",
    // marginBottom: 5,
  },
  headingText: {
    fontSize: FONTS.font20,
    fontWeight: "bold",
    color: "blue",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    marginBottom: 10

  },
  Btn2xWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width:'80%',
    backgroundColor:"#005dcc",
    flexDirection:"row",
    borderRadius: 15,
    elevation:5,
    paddingVertical:10,

  },
  Btn2xText: {
    color:"white",
    fontSize:FONTS.font24,
    marginLeft:20

  },
  iconConv: {
  marginBottom:10,

  },
})
