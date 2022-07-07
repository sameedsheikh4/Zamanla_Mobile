import React from 'react';
import { View, Text, ImageBackground, StyleSheet ,Image} from 'react-native';
import { FONTS } from '../Theme/theme';
import { useTheme } from '@react-navigation/native';
import VectorIcons from './VectorIcons';
const GiftCard = ({ user, index }) => {
    let { Title, image, Rank } = user
    console.log(user,'title, points, rating');
    const { colors } = useTheme();
    return (
        <View style={[styles.card, { backgroundColor: 'transparent' }]}>
            <View style={styles.Content}>
                <Text style={styles.Rank}>{`${Rank} Rank Person Gift`}</Text>
            </View>
            <View style={styles.cardBody}>
            <Text style={styles.title}>{`${Title}`}</Text>

                <View style={styles.image}>
                    <Image
                        source={{
                            uri: !image?`https://source.unsplash.com/random/?${Title}`:image,
                        }}
                        style={styles.imageStyle}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    cardBody: {
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '100%',
    },
    Content: {
        flex: 1,
        marginBottom: 10,

    },
    title: {
        fontSize: FONTS.font20,
        fontWeight: "bold",
        color: "blue",
        textTransform: "capitalize",
        marginBottom:10

    },
    Rank: {
        fontSize: FONTS.font16,
        fontWeight: "bold",
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
        // height: 100,
        // width: 100,
        // borderRadius: 1000,
        alignSelf: "center"
    },
    imageStyle: {
        borderRadius: 1000, 
        borderWidth: 2,
        height: 120,
        width: 120,
    },

});
export default GiftCard;