import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create(
    {
        container: {
            backgroundColor: "#28AF6E",
            position: 'absolute',
            width: width - 48,
            bottom: 90,
            paddingVertical: 16,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            color: "#ffffff"
        }
    }
);