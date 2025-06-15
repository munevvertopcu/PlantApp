import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './CommonButton.style';

function CommonButton({ title, onPress, buttonStyle }) {

    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton;