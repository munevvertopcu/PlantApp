import React from 'react';
import { Get } from '../controllers/httpController';

export function useGet(endpoint, initialValue) {
    const [data, setData] = React.useState(initialValue);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        Get(endpoint)
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