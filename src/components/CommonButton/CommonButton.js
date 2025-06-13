import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './CommonButton.style';

function CommonButton({ title, onPress }) {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton;