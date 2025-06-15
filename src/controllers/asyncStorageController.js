import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SetCompleted(data) {
    await AsyncStorage.setItem('onboardingCompleted', data);
}

export async function GetCompleted() {
    var completed = await AsyncStorage.getItem('onboardingCompleted');
    return completed;
}