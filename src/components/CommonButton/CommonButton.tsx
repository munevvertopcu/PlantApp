import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from './CommonButton.style';

type CommonButtonProps = {
    title: string;
    onPress?: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
};

const CommonButton: React.FC<CommonButtonProps> = ({ title, onPress, buttonStyle }) => {
    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CommonButton;