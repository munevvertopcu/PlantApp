import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import styles from './Homepage.style';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useGet } from '../../hooks/useGet';

const cardData = [
    {
        id: 1,
        title: 'How to identify plants easily with PlantApp?',
        image: require('../../../assets/Image.jpg'),
    },
    {
        id: 2,
        title: 'How to identify plants easily with PlantApp?',
        image: require('../../../assets/Image.jpg'),
    },
    {
        id: 3,
        title: 'How to identify plants easily with PlantApp?',
        image: require('../../../assets/Image.jpg'),
    },
];

function Homepage() {

    const { data, error, loading } = useGet(
        'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories',
        []
    );

    const renderCardItem = ({ item }) => {
        return (
            <ImageBackground
                source={item.image}
                style={styles.card}
                imageStyle={styles.image}
            >
                <Text style={styles.infoCardText}>{item.title}</Text>
            </ImageBackground>
        )
    };

    const renderPlantItem = ({ item }) => {
        return (
            <ImageBackground
                source={{ uri: item.image.url }}
                style={styles.plantCard}
                imageStyle={styles.image}
            >
                <Text style={styles.plantCardText}>{item.title}</Text>
            </ImageBackground>
        )
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBoxWrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={require('../../../assets/image3.png')} />
                    <Image source={require('../../../assets/image2.png')} />
                </View>
                <View>
                    <Text style={styles.title}>Hi, plant lover!</Text>
                    <Text style={styles.text}>Good Afternoon! 🌤️</Text>
                    <View style={styles.inputContainer}>
                        <Feather name="search" size={23} color="#888" />
                        <TextInput
                            placeholder="Search for plants"
                            style={{ height: 40 }}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.banner}>
                <Image
                    source={require('../../../assets/Icon.png')}
                />
                <View style={{ marginRight: 20 }}>
                    <Text style={styles.bannerTitle}>FREE Premium Available</Text>
                    <Text style={styles.bannerSub}>Tap to upgrade your account!</Text>
                </View>
                <AntDesign name="right" size={24} color="#9d8453" />
            </TouchableOpacity>
            <Text style={styles.header}>Get Started</Text>
            <ScrollView>
                <FlatList
                    data={cardData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 16 }}
                    renderItem={renderCardItem}
                    style={styles.infoCardList}
                />
                {loading ? (
                    <ActivityIndicator
                        size="large"
                        color="black"
                        style={{ marginTop: 50 }}
                    />
                ) : (
                    <FlatList
                        data={data.data}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        renderItem={renderPlantItem}
                        contentContainerStyle={{ gap: 12 }}
                        style={styles.plantList}
                        scrollEnabled={false}
                    />
                )}
            </ScrollView>
        </View>
    );
}

export default Homepage;