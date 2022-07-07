

import React, { useState, useContext,useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput


} from 'react-native';

import CustomHeader from '../../components/CustomHeader';
import GiftCard from '../../components/GiftCard';
import VectorIcons from '../../components/VectorIcons';
import { FONTS } from '../../Theme/theme';
import axios from '../../axois/Axois'

const GiftScreen = ({ navigation }) => {
  const [data, setdata] = useState(
    [
      {
        Title: "Mobile",
        Rank: 1,
        image: "",
      },
      {
        Title: "PS4",
        Rank: 2,
        image: "https://static-01.daraz.pk/p/c86b16acf1a89854c030638cf30d46f3.jpg",
      },
      {
        Title: "Air Pods",
        Rank: 3,
        image: "",
      },
      
    ]
  )
  const getAllGift = () => { 
    console.log("infreinds");
    axios.get('/Gift')
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        setdata(JSON.stringify(response.data))
    })
    .catch(function (error) {
        console.log(error,'eorrooo');
    })
 }
useEffect(() => {
    getAllGift()
}, [])  
  return (
    <SafeAreaView style={styles.mainView}>
      <CustomHeader />
      <View style={styles.mainViewTop}>
        <Text style={styles.heading}>
         Gifts
        </Text>
        <ScrollView contentContainerStyle={styles.ScrollView}>
          {
            data.map((user, i) => {
              return (

                <GiftCard user={user} key={i} index={i} />

              )

            })
          }

        </ScrollView>

      </View>
    </SafeAreaView>
  )

}
export default GiftScreen;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fafbff",

  },
  mainViewTop: {
    flex: 1,
    backgroundColor: "#fafbff",
  },
  HeadingWrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  ScrollView: {
    // flex: .8,
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingBottom: 70

  },

  heading: {
    fontSize: FONTS.font28,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 40,
    marginTop: 10,
    marginBottom:20,


  },
})
