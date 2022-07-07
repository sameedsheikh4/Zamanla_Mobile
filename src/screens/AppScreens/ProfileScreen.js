

import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ToastAndroid,
  TouchableOpacity,
  Image


} from 'react-native';

import CustomHeader from '../../components/CustomHeader';
import { GlobalContext } from '../../context/context';

import VectorIcons from '../../components/VectorIcons';
import { FONTS } from '../../Theme/theme';
import auth from '@react-native-firebase/auth';

const ProfileScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state.User,"sssssssssssss");
let {displayName,photoURL}=state.User
  const signOut = () => { 
    auth()
      .signOut()
      .then(() =>ToastAndroid.show('Logged out succesfully', ToastAndroid.SHORT));

   }
  return (
    <SafeAreaView style={styles.mainView}>
      <CustomHeader />
      <View style={styles.Wrapper}>
        <Text style={styles.heading}>
          Your Profile
        </Text>


        <View style={styles.imageUser}>

          <Image
            style={styles.image}
            source={{uri:photoURL}}
          />
          <Text style={styles.userName}>
            {displayName}
          </Text>
        </View>
        <View style={styles.UserStats}>
          <View style={styles.UserStat1}>
            <Text style={styles.statHeading}>
              632
            </Text>
            <Text style={styles.statTExt}>
              takipci
            </Text>

          </View>
          <View style={styles.UserStat1}>
            <Text style={styles.statHeading}>
              32
            </Text>
            <Text style={styles.statTExt}>
              Posting
            </Text>

          </View>
        </View>
        <View style={styles.BtnsWrapper}>

          <TouchableOpacity style={styles.Btn2xWrapper} onPress={signOut}>
            <Text style={styles.Btn2xText}>
              çıkış Yap
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Btn2xWrapper, { backgroundColor: "#005dcc", marginLeft: 20, }]}>
            <Text style={[styles.Btn2xText, { color: "white" }]}>
              profili Düzenle
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screens}>
          <TouchableOpacity style={styles.screen} >
            <Text style={styles.screenText}>
              istatistikler
            </Text>
            <VectorIcons name="keyboard-arrow-right" family={'MaterialIcons'} color={'black'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.screen} >
            <Text style={styles.screenText}>
            Aldiklarim
            </Text>
            <VectorIcons name="keyboard-arrow-right" family={'MaterialIcons'} color={'black'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.screen}>
            <Text style={styles.screenText}>
            Davet Et

            </Text>
            <VectorIcons name="keyboard-arrow-right" family={'MaterialIcons'} color={'black'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.screen}>
            <Text style={styles.screenText}>
            S.S.S
            </Text>
            <VectorIcons name="keyboard-arrow-right" family={'MaterialIcons'} color={'black'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.screen,{borderBottomWidth:0,}]} >
            <Text style={styles.screenText}>
            letisim
            </Text>
            <VectorIcons name="keyboard-arrow-right" family={'MaterialIcons'} color={'black'} size={25} />
          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  )

}
export default ProfileScreen;
const styles = StyleSheet.create({
  UserStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    width: "55%",
    marginVertical: 10,

  },
  BtnsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    width: "90%",
    marginVertical: 10,

  },
  UserStat1: {
    backgroundColor: "white",
    elevation: 1,
    paddingVertical: 10,
    paddingHorizontal:20,
    textAlign: "center",
    borderColor:"#c9c9c9",
    borderWidth:1,
    borderRadius:10,

  },
  statHeading: {
    fontWeight: "bold",
    fontSize: FONTS.font18,
    color: "black",
    textAlign: "center"

  },
  userName: {
    fontWeight: "bold",
    fontSize: FONTS.font22,
    color: "black",
    textAlign: "center",
    textTransform: "uppercase"
  },
  screen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    height:46,
    borderBottomColor:"#c9c9c9",
    borderBottomWidth:2,
  },
  screens: {
    // flex: 1,
    backgroundColor: "white",
    elevation:2,
    width:'80%',
    padding:10,
    borderRadius:10,
    marginTop:5

  },
  screenText: {
  color:"black",
  fontSize:FONTS.font16

  },
  mainView: {
    flex: 1,
    backgroundColor: "#fafbff",

  },
  Wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  HeadingWrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heading: {
    fontSize: FONTS.font20,
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: 5,
  },
  headingText: {
    fontSize: FONTS.font20,
    fontWeight: "bold",
    color: "blue",
  },
  imageUser: {

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    marginBottom: 7,
    elevation: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center"
  },
  Btn2xWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 1,
    padding: 10,
    borderRadius: 7,
    width: '50%'



  },
  Btn2xText: {
    color: "black",
    fontSize: FONTS.font18,

  },

})
