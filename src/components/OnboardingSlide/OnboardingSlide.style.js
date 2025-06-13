import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create(
    {
        container: {
            alignItems: "center",
            paddingHorizontal: 24,
            width: width
        },
        textContainer: {
            paddingTop: 50
        },
        title: {
            color: '#13231B',
            fontSize: 28,
            fontFamily: 'Rubik-Regular'
        },
        highlight: {
            fontFamily: 'Rubik-Medium'
        },
        subtitle: {
            fontSize: 16,
            marginTop: 5,
            color: "#13231BB2",
            fontFamily: 'Rubik-Regular'
        },
        imageContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        },
        mainImage: {
            resizeMode: "contain",
            height: "100%"
        },
        overlayImage: {
            position: 'absolute',
            resizeMode: 'contain',
        },
    }
);