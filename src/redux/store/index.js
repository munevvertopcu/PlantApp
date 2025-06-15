import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from '../features/onBoardingSlice';

export const store = configureStore({
    reducer: {
        onboarding: onboardingReducer,
    },
});