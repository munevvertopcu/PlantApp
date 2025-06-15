import React from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './Paywall.style';
import { features } from '../../data/PaywallData';
import FeatureItem from '../../components/FeatureItem';
import ActionButton from '../../components/ActionButton';
import CommonButton from '../../components/CommonButton';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Paywall() {
    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/Image.jpg')} style={styles.bg} resizeMode='cover'>
                <TouchableOpacity style={styles.closeButton} >
                    <AntDesign name="closecircle" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles.listWrapper}>
                    <Text style={styles.header}>
                        <Text style={{ fontFamily: "Rubik-Bold" }}>PlantApp</Text> Premium
                    </Text>
                    <Text style={styles.text}>Access All Features</Text>
                    <FlatList
                        data={features}
                        horizontal
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <FeatureItem icon={item.icon} title={item.title} desc={item.desc} />
                        )}
                        contentContainerStyle={{ justifyContent: 'space-between', gap: 16 }}
                        showsHorizontalScrollIndicator={false}
                        style={styles.list}
                    />
                </View>
            </ImageBackground>
            <ActionButton
                checked={checked}
                setChecked={setChecked}
                title="1 Month"
                text="$2.99/month, auto renewable"
                value="first" />
            <ActionButton
                checked={checked}
                setChecked={setChecked}
                title="1 Year"
                text="First 3 days free, then $529,99/year"
                value="second" />
            <CommonButton
                title="Try free 3 days"
                buttonStyle={{ alignSelf: "center", marginTop: 5 }} />
            <Text style={styles.subText}>After the 3-day free trial period you’ll be charged ₺274.99 per year unless
                you cancel before the trial expires. Yearly Subscription is Auto-Renewable
            </Text>
            <Text style={styles.subText}>Terms  •  Privacy  •  Restore</Text>
        </View>
    )
}