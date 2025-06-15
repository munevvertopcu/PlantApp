import React, { useRef, useState } from 'react';
import {
  Text,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './Onboarding.style';
import CommonButton from '../../components/CommonButton';
import OnboardingSlide from '../../components/OnboardingSlide';
import Pagination from '../../components/Pagination';
import { slides } from '../../data/OnboardingData';
import { Slide } from '../../types';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  Paywall: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Paywall'
>;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};

const Onboarding: React.FC<Props> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<Slide>>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('Paywall');
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: { item: Slide }) => (
    <OnboardingSlide item={item} />
  );

  return (
    <LinearGradient
      colors={['rgba(250, 250, 250, 0.53)', 'rgba(250, 250, 250, 0.53)']}
      style={styles.container}
    >
      <FlatList
        data={slides}
        ref={flatListRef}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        style={styles.slide}
        onMomentumScrollEnd={handleScroll}
      />

      {currentIndex === 0 ? (
        <Text style={styles.text}>
          By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.
        </Text>
      ) : (
        <Pagination data={slides} currentIndex={slides[currentIndex].id} />
      )}

      <CommonButton
        title={slides[currentIndex].buttonText}
        onPress={handleNext}
        buttonStyle={styles.button}
      />
    </LinearGradient>
  );
};

export default Onboarding;