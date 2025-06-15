import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create(
    {
        container: {
            backgroundColor: "#101e17",
            flex: 1,
        },
        bg: {
            width: width,
            height: height * 0.6,
            justifyContent: "flex-end",
        },
        header: {
            color: "#fff",
            marginTop: 50,
            fontFamily: 'Rubik-Regular',
            fontSize: 25,
            marginLeft: 30
        },
        text: {
            color: "#fff",
            fontFamily: "Rubik-Regular",
            marginLeft: 30
        },
        listWrapper: {
            paddingBottom: 20
        },
        list: {
            marginLeft: 30,
            marginTop: 20
        },
        subText: {
            color: "#FFFFFF85",
            fontSize: 9,
            textAlign: "center",
            marginTop: 7
        },
        closeButton: {
            position: "absolute",
            top: 30,
            right: 20
        }
    }
);