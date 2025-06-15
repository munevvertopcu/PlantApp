import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create(
    {
        container: {
            alignItems: "center",
            paddingHorizontal: 24,
            width: width,
        },
        textContainer: {
            paddingTop: 50
        },
        title: {
            color: '#13231B',
            fontSize: 26,
            fontFamily: 'Rubik-Regular'
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
            height: '100%',
        },
        titleWrapper: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        },

        highlightWrapper: {
            position: 'relative',
            alignItems: "flex-end",
        },

        lineImage: {
            position: 'absolute',
            bottom: -20
        },
        overlayImage: {
            position: 'absolute',
            resizeMode: 'contain',
        },
    }
);