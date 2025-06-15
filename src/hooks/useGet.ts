import React from 'react';
import { Get } from '../controllers/httpController';

type UseGetResult<T> = {
    data: T;
    error: any | null;
    loading: boolean;
};

export function useGet<T>(endpoint: string, initialValue: T): UseGetResult<T> {
    const [data, setData] = React.useState<T>(initialValue);
    const [error, setError] = React.useState<any | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(true);
        Get<T>(endpoint)
            .then((data) => {
                setData(data);
                setError(null);
            })
            .catch((err) => {
                console.error('useGet error:', err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [endpoint]);

    return { data, error, loading };
}