import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './FeatureItem.style';

function FeatureItem({icon, title, desc}) {

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={icon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    )
}

export default FeatureItem;