import React, { FC } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import styles from './Pagination.style';

interface PaginationProps {
    data: Array<{ id: number }>;
    currentIndex: number;
}

const Pagination: FC<PaginationProps> = ({ data, currentIndex }) => {
    return (
        <View style={styles.dotsContainer}>
            {data.map((i) => (
                <View
                    key={i.id}
                    style={[
                        styles.dot,
                        currentIndex === i.id ? styles.dotActive : styles.dotInactive,
                    ] as StyleProp<ViewStyle>}
                />
            ))}
        </View>
    );
}

export default Pagination;