import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FONTS } from '../Theme/theme';


import { StackActions, useNavigation } from '@react-navigation/native';
import VectorIcon from './VectorIcons';
import { useTheme } from '@react-navigation/native';
import VectorIcons from './VectorIcons';
const CustomHeader = ({
    title = 'Requiremnets',
    description = 'Lorem, ipsum dolor sit amet consectetur',
    silver = 1.50,
    gold = 200,


}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();


    return (
            <View style={[styles.HeaderTopContent, { backgroundColor: '#fafbff'}]}>
                <TouchableOpacity >
                    <VectorIcon name="arrow-back-outline" size={30} color="#000" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <View style={styles.Titlemain}>
                    <View style={styles.title}>
                        <View style={styles.silverIcon}>

                        <VectorIcons  name="star" size={15} color={"white"} />
                        </View>
                        <Text style={styles.titleText}>{silver}</Text>
                    </View>
                    <View style={styles.title}>
                        <View style={styles.goldIcon}>
                        <VectorIcons  name="star" size={15} color={ "white"} />

                        </View>
                        <Text style={styles.titleText}>{gold}</Text>
                    </View>

                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderTopContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingBottom: 10,
       height: 80,
       paddingTop:10,


    },
    title: {
        backgroundColor: "white",
        elevation: 10,
        paddingVertical: 5,
        paddingHorizontal:15,
        flexDirection:"row",
        marginHorizontal:10,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center"
    },
    titleText: {
       color:"black",
       fontSize:FONTS.font14,
       paddingLeft:10,
       fontWeight:"bold"
    },
    goldIcon: {
      backgroundColor:"gold",
      borderRadius:1000,
      padding:2,
    },
    silverIcon: {
        backgroundColor:"silver",
        borderRadius:1000,
        padding:2,

    },
    Titlemain: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
});
export default CustomHeader;
