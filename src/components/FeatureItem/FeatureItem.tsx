import React, { FC } from 'react';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import styles from './FeatureItem.style';

interface FeatureItemProps {
    icon: ImageSourcePropType;
    title: string;
    desc: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, title, desc }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={icon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    );
}

export default FeatureItem;