import React from 'react';

import {View, Dimensions, Image} from 'react-native'
import { useGalleryContext } from '../context';
import GestureRecognizer from 'react-native-swipe-gestures';

let { width, height } = Dimensions.get('window');
const FullscreenImage = () => {
    const { photos, fullscreenImageIndex, previousPhoto, nextPhoto, exitFullscreenMode } = useGalleryContext()
    console.log(fullscreenImageIndex)
    return (
        <View>
            <GestureRecognizer onSwipeLeft={() => nextPhoto()} onSwipeRight={() => previousPhoto()} onSwipeDown={() => { console.log("down detected");  exitFullscreenMode()}}>
                <Image resizeMode='contain' style={{width: width, height: height}} source={{uri: `file://${photos[fullscreenImageIndex].file.path}`}} />
            </GestureRecognizer>
            
        </View>
    );
};

export default FullscreenImage;