import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OnboardingSlide.style';

interface TitlePart {
    text: string;
    isUnderline?: boolean;
    font: string;
}

interface Overlay {
    source: any;
    style: object;
}

interface Item {
    id: number;
    titleParts: TitlePart[];
    subtitle?: string;
    mainImage: any;
    overlays?: Overlay[];
}

interface OnboardingSlideProps {
    item: Item;
}

const OnboardingSlide: FC<OnboardingSlideProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, { marginBottom: item.id === 3 ? 50 : 0 }]}>
                <View style={styles.titleWrapper}>
                    {item.titleParts.map((part, index) =>
                        part.isUnderline ? (
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
                        ) : (
                            <Text key={index} style={[styles.title, { fontFamily: part.font }]}>
                                {part.text}
                            </Text>
                        )
                    )}
                </View>
                {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
            </View>
            <View style={styles.imageContainer}>
                <Image source={item.mainImage} style={styles.mainImage} />
                {item.overlays?.map((overlay, index) => (
                    <Image
                        key={index}
                        source={overlay.source}
                        style={[overlay.style, styles.overlayImage]}
                    />
                ))}
            </View>
        </View>
    );
};

export default OnboardingSlide;