import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        },
        slide: {
            flex: 1,
            marginBottom: 110,
        },
        text: {
            color: "#597165B2",
            textAlign: "center",
            marginHorizontal: 70,
            fontSize: 11,
            position: "absolute",
            bottom: 40,
            fontFamily: "Rubik-Regular"
        }
    }
);