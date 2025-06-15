import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SetCompleted(data: string): Promise<void> {
    await AsyncStorage.setItem('onboardingCompleted', data);
}

export async function GetCompleted(): Promise<string | null> {
    const completed: string | null = await AsyncStorage.getItem('onboardingCompleted');
    return completed;
}