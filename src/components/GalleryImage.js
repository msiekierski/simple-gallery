import React from 'react';

import {Image, StyleSheet, TouchableHighlight, Dimensions} from 'react-native'
import { useGalleryContext } from '../context';

const styles = StyleSheet.create({
    img: {
        minWidth: (Dimensions.get('window').width/3)-2,
        minHeight: 100,
        margin: 1,
    }
})

const GalleryImage = ({id, file}) => {
    const { enterFullscreenMode } = useGalleryContext();
    return (
        <TouchableHighlight onPress={() => enterFullscreenMode(id)}>
            <Image style={styles.img} source={{uri: `file://${file.path}`}}/>
        </TouchableHighlight>
    );
};

export default GalleryImage;