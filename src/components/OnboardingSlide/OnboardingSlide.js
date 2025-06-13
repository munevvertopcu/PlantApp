import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OnboardingSlide.style';

function OnboardingSlide({ item }) {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {item.title} <Text style={styles.highlight}>{item.highlight}</Text>
                </Text>
                {
                    item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>
                }
            </View>
            <View style={styles.imageContainer}>
                <Image source={item.mainImage} style={styles.mainImage} />
                {item.overlays.map((overlay, index) => (
                    <Image key={index} source={overlay.source} style={[styles.overlayImage, overlay.style]} />
                ))}
            </View>
        </View>
    )
}

export default OnboardingSlide;