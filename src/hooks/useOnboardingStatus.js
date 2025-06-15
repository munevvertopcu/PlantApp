import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetCompleted } from '../controllers/asyncStorageController';
import { completeOnboarding } from '../redux/features/onBoardingSlice';

export default function useOnboardingStatus() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;

        const checkOnboardingStatus = async () => {
            const value = await GetCompleted();
            if (value?.toString() === 'true' && isMounted) {
                dispatch(completeOnboarding());
            }
            if (isMounted) setLoading(false);
        };

        checkOnboardingStatus();
        return () => {
            isMounted = false;
        };
    }, []);

    return loading;
}