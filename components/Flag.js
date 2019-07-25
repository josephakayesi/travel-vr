import React from 'react';
import { asset, StyleSheet, Image } from 'react-360';

const Flag = ({ activeFlag, image }) => {

    const { flag } = styles;

    return (
        <Image
            style={[flag, activeFlag === image && styles.activeFlag]}
            source={asset(image)}
        />
    );
}

const styles = StyleSheet.create({
    flag: {
        height: 400,
        width: 600,
        marginRight: 20,
        opacity: 0.7
    },
    activeFlag: {
        opacity: 1
    }
});

export default Flag;
