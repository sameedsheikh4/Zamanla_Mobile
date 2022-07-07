

import React, { useState, useContext,useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView


} from 'react-native';

import CustomHeader from '../../components/CustomHeader';
import LeaderBoradCard from '../../components/LeaderBoradCard';
import { FONTS } from '../../Theme/theme';
import axios from '../../axois/Axois'
const LeaderBoradScreen = ({ navigation }) => {
    const [data, setdata] = useState(
        [
            {
                title: "John Simith",
                points: 100,
                rating: 7,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
            {
                title: "John Simith",
                points: 100,
                rating: 3,
                image: ""
            },
        ]
    )
    // const getAllFriend = () => { 
    //     axios.get('/FriendList')
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         setdata(JSON.stringify(response.data))
    //     })
    //     .catch(function (error) {
    //         console.log(error,'eorrooo');
    //     })
    //  }
    // useEffect(() => {
    //     getAllFriend()
    // }, [])
    
       
    return (
        <SafeAreaView style={styles.mainView}>
            <CustomHeader />
            <View style={styles.mainViewTop}>
                <View style={styles.HeadingWrapper}>
                    <Text style={styles.heading}>
                        Leader Borad
                    </Text>
                    <Text style={styles.DropDown}>
                        global rank borad
                    </Text>

                </View>
                <ScrollView contentContainerStyle={styles.ScrollView}>
                    {
                        data.map((user, i) => {
                            return (
                                <LeaderBoradCard user={user} key={i} />

                            )

                        })
                    }

                </ScrollView>

            </View>
        </SafeAreaView>
    )

}
export default LeaderBoradScreen;
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
        height: 120,
        justifyContent: "space-between",
        alignItems: "center",
        //   backgroundColor:"red"
    },
    ScrollView: {
        // flex: .8,
        flexGrow: 1,
        paddingHorizontal: 40,
        paddingBottom: 70

    },

    heading: {
        fontSize: FONTS.font24,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 20,
        textTransform: "uppercase",
        // letterSpacing:1
        marginTop: 20

    },
    DropDown: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        width: '80%',
        marginBottom: 10


    },
})
