import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#fbfafa"
        },
        searchBoxWrapper: {
            backgroundColor: " #f7f7f7",
            height: height * 0.25,
            position: "relative",
            justifyContent: "flex-end"
        },
        imageWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            width: width,
            bottom: 0
        },
        title: {
            fontSize: 17,
            marginLeft: 20,
            fontFamily: "Rubik-Regular"
        },
        text: {
            fontSize: 25,
            paddingBottom: 15,
            marginLeft: 20,
            fontFamily: "Rubik-Medium"
        },
        inputContainer: {
            flexDirection: 'row',
            backgroundColor: "#fff",
            marginHorizontal: 20,
            borderRadius: 15,
            marginBottom: 20,
            alignItems: 'center',
            paddingLeft: 5
        },
        banner: {
            backgroundColor: '#24201a',
            borderRadius: 15,
            padding: 10,
            marginHorizontal: 20,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center"
        },
        bannerTitle: {
            color: '#fff',
            fontFamily: "Rubik-Medium",
            fontSize: 16
        },
        bannerSub: {
            color: '#ccc',
            fontSize: 13,
            marginTop: 4,
            fontFamily: "Rubik-Regular"
        },
        infoCardList: {
            marginLeft: 20,
            marginTop: 10
        },
        plantList: {
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 10
        },
        header: {
            fontFamily: "Rubik-Medium",
            fontSize: 16,
            marginTop: 15,
            marginLeft: 20
        },
        plantCard: {
            width: width * 0.42,
            height: 150,
            backgroundColor: "#fff",
            marginRight: 15,
            padding: 10
        },
        card: {
            width: 250,
            height: 170,
            justifyContent: "flex-end"
        },
        infoCardText: {
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 10,
            borderRadius: 15
        },
        plantCardText: {
            fontFamily: "Rubik-Medium",
            fontSize: 17
        },
        image: {
            borderRadius: 16,
            resizeMode: "cover"
        }
    }
);