import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OnboardingSlide.style';

function OnboardingSlide({ item }) {

    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, { marginBottom: item.id === 3 && 50 }]}>
                <View style={styles.titleWrapper}>
                    {item.titleParts.map((part, index) => {
                        if (part.isUnderline) {
                            return (
                                <View key={index} style={styles.highlightWrapper}>
                                    <Text style={[styles.title, { fontFamily: part.font }]}>
                                        {part.text}
                                    </Text>
                                    <Image
                                        source={require('../../../assets/Line.png')}
                                        style={styles.lineImage}
                                        resizeMode="contain"
                                    />
                                </View>
                            );
                        }

                        return (
                            <Text key={index} style={[styles.title, { fontFamily: part.font }]}>
                                {part.text}
                            </Text>
                        );
                    })}
                </View>
                {
                    item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>
                }
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={item.mainImage}
                    style={styles.mainImage} />
                {item.overlays?.map((overlay, index) => (
                    <Image
                        key={index}
                        source={overlay.source}
                        style={[overlay.style, styles.overlayImage]} />
                ))}
            </View>
        </View>
    )
}

export default OnboardingSlide;