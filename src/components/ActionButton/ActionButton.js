import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ActionButton.style';
import { RadioButton } from 'react-native-paper';

function ActionButton({ checked, setChecked, title, text, value }) {

    return (
        <TouchableOpacity style={[styles.container, { borderColor: checked === value ? "#28af6e" : "#1c2923" }]}>
            <RadioButton
                value={value}
                status={checked === value ? 'checked' : 'unchecked'}
                onPress={() => setChecked(value)}
                color="#28af6e"
            />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ActionButton;