import React from 'react';
import { View } from 'react-native';
import styles from './Pagination.style';

function Pagination({ data, currentIndex }) {

    return (
        <View style={styles.dotsContainer}>
            {data.map((i) => (
                <View
                    key={i.id}
                    style={[
                        styles.dot,
                        currentIndex === i.id ? styles.dotActive : styles.dotInactive,
                    ]}
                />
            ))}
        </View>
    )
}

export default Pagination;