import React, { useRef, useState } from 'react';
import { Text, FlatList, Dimensions } from 'react-native';
import styles from './Onboarding.style';
import CommonButton from '../../components/CommonButton';
import { slides } from '../../data/OnboardingData';
import OnboardingSlide from '../../components/OnboardingSlide';
import Pagination from '../../components/Pagination';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

function Onboarding() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.replace('Home');
        }
    };

    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const renderItem = ({ item }) => {
        return (
            <OnboardingSlide item={item} />
        );
    };

    return (
        <LinearGradient
            colors={['rgba(250, 250, 250, 0.53)', 'rgba(250, 250, 250, 0.53)']}
            style={styles.container}>
            <FlatList
                data={slides}
                ref={flatListRef}
                keyExtractor={(item) => item.id}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                horizontal
                style={styles.slide}
                onMomentumScrollEnd={handleScroll}
            />
            {
                currentIndex === 0 ? (
                    <Text style={styles.text}>By tapping next, you are agreeing to PlantID
                        Terms of Use & Privacy Policy.</Text>
                ) : (
                    <Pagination data={slides} currentIndex={currentIndex} />
                )
            }
            <CommonButton title={slides[currentIndex].buttonText} onPress={handleNext} />
        </LinearGradient>
    )
}

export default Onboarding;