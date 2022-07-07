import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { FONTS } from '../Theme/theme';
import { useTheme } from '@react-navigation/native';
import VectorIcons from './VectorIcons';
const FriendCard = ({ user,index }) => {
    let { FriendName, points, rating } = user
    // console.log(title, points, rating,'title, points, rating');
    // console.log(index,"keykey");
    const { colors } = useTheme();
    return (
        <View style={[styles.card, { backgroundColor: "white" }]}>
            <View style={styles.cardBody}>
                <View style={styles.image}>
                    <ImageBackground source={require('../Asset/Images/Profile/profile.png')} style={{
                        flex: 1,
                        resizeMode: "cover",
                    }} imageStyle={{
                        borderRadius: 1000, borderWidth: 2,
                        borderColor: 'white',
                    }}></ImageBackground>
                </View>
                <View style={styles.Content}>
                    <Text style={styles.title}>{index+1}. {FriendName}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 10,
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    cardBody: {
        paddingLeft: 20,
        paddingRight: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Content: {
        flex: 1,

    },
    title: {
        fontSize: FONTS.font16,
        fontWeight: "bold",
        marginLeft: 10,
        color: "black",
        textTransform: "capitalize",

    },
    titleText: {
        fontSize: FONTS.font12,
        fontWeight: "bold",
        marginLeft: 10,
        textTransform: "capitalize",
        // textTransform:'uppercase'

    },
    image: {
        height: 45,
        width: 45,
        borderRadius: 1000,
        alignSelf: "center"
    },
    star: {
        paddingRight: 10
    },

});
export default FriendCard;