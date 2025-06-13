import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './OnboardingSlide.style';

const ORIGINAL_MAIN_IMAGE_WIDTH = 375;
const ORIGINAL_MAIN_IMAGE_HEIGHT = 499;

function OnboardingSlide({ item }) {

    const [mainImageLayout, setMainImageLayout] = React.useState({ width: 0, height: 0 });

    const getOverlayStyle = (figmaStyle) => {
        const { width, height } = mainImageLayout;

        return {
            top: (figmaStyle.top / ORIGINAL_MAIN_IMAGE_HEIGHT) * height,
            left: (figmaStyle.left / ORIGINAL_MAIN_IMAGE_WIDTH) * width,
        };
    };

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
                <Image
                    source={item.mainImage}
                    style={styles.mainImage}
                    onLayout={(e) => {
                        const { width, height } = e.nativeEvent.layout;
                        setMainImageLayout({ width, height });
                    }} />
                {mainImageLayout.width > 0 && item.overlays?.map((overlay, index) => (
                    <Image
                        key={index}
                        source={overlay.source}
                        style={[getOverlayStyle(overlay.style), styles.overlayImage, { zIndex: overlay.zIndex ?? 0 }]} />
                ))}
            </View>
        </View>
    )
}

export default OnboardingSlide;