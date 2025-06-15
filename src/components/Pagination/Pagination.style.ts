import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        dotsContainer: {
            flexDirection: 'row',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 45,
        },
        dot: {
            height: 8,
            borderRadius: 4,
            marginHorizontal: 5,
        },
        dotInactive: {
            width: 8,
            height: 8,
            backgroundColor: '#13231B40',
        },
        dotActive: {
            width: 10,
            height: 10,
            backgroundColor: '#13231B',
        },
    }
);