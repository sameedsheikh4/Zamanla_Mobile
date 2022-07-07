

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
import FriendCard from '../../components/FriendCard';
import VectorIcons from '../../components/VectorIcons';
import { FONTS } from '../../Theme/theme';
import axios from '../../axois/Axois'

const FriendListScreen = ({ navigation }) => {
  const [data, setdata] = useState(
    [
        {
            FriendName: "John Simith",
            points: 100,
            rating: 7,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
        {
            FriendName: "John Simith",
            points: 100,
            rating: 3,
            image: ""
        },
    ]
)
  const getAllFriend = () => { 
    console.log("infreinds");
    axios.get('/FriendList')
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        setdata(JSON.stringify(response.data))
    })
    .catch(function (error) {
        console.log(error,'eorrooo');
    })
 }
useEffect(() => {
    getAllFriend()
}, [])
  return (
    <SafeAreaView style={styles.mainView}>
      <CustomHeader />
      <View style={styles.mainViewTop}>
        <View style={{
          alignItems: 'center',
          marginBottom: 10,
          width:'80%',
          alignSelf:"center"
        }}>


          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              elevation:0,
              borderWidth: 1,
              borderRadius: 5,
              borderColor:'grey',
              color: "#616161",
              height: 44,
              paddingLeft: 10,
              borderRadius:10
              // marginBottom: 20,
            }}>


            <VectorIcons name="search" family={'MaterialIcons'} color={'black'} size={26} />



            <TextInput
              style={{
                paddingLeft: 20,
                flex: 1,
                borderColor: 'transparent',
                height: '100%',
                textAlignVertical: 'center'

              }}
              placeholderTextColor="#616161"
              fontSize={FONTS.font12}
              fontWeight='bold'
              placeholder={'john simith'}
              keyboardType={'text'}

            />
          </View>
        </View>
        <Text style={styles.heading}>
          Friends List
        </Text>
        <ScrollView contentContainerStyle={styles.ScrollView}>
          {
            data.map((user, i) => {
              return (

                <FriendCard user={user} key={i} index={i} />

              )

            })
          }

        </ScrollView>

      </View>
    </SafeAreaView>
  )

}
export default FriendListScreen;
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
    // height: 100,
    justifyContent: "space-between",
    alignItems: "flex-start",
    //   backgroundColor:"red"
  },
  ScrollView: {
    // flex: .8,
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingBottom: 70

  },

  heading: {
    fontSize: FONTS.font18,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 40,
    marginTop: 10,


  },
  DropDown: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    width: '80%',
    alignSelf: "center",
    marginVertical: 20,


  },
})
