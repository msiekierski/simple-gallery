
 import React from 'react';
 import {
   ActivityIndicator,
  Dimensions,
  View,
 } from 'react-native';
import { useGalleryContext } from '../context';
import FullscreenImage from './FullscreenImage';
import PhotoGrid from './PhotoGrid';
 

let { _, height } = Dimensions.get('window');
const Home = () => {
   
  const { isLoading, isInFullscreenMode } = useGalleryContext();

   if (isLoading) {
     return <ActivityIndicator size="large" />;
   }
   
   if (isInFullscreenMode) {
     return <View style={{widht: '100%', minHeight: height, backgroundColor: 'black'}}>
       <FullscreenImage />

     </View>
   }

  return <View style={{widht: '100%', minHeight: height, backgroundColor: 'black'}}>
     <PhotoGrid />
   </View>

 };
 
 
 
 export default Home;
 