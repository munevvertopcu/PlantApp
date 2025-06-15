import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create(
    {
        container: {
            backgroundColor: "#28AF6E",
            width: width - 48,
            paddingVertical: 16,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50
        },
        title: {
            color: "#ffffff"
        }
    }
);