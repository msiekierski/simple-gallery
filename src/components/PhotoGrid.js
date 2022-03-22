
 import React from 'react';
 import {
   FlatList,
  SafeAreaView,
  Text,
   View
 } from 'react-native';

import { useGalleryContext } from '../context';
import GalleryImage from './GalleryImage';
 
 
const PhotoGrid = () => {
    const {photos} = useGalleryContext()
 
    const listItem = ({ item }) => {
        return <GalleryImage {...item}/>
  }
  
  if (photos.length === 0) {
    return <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: 'red'}}>No image was found on your device</Text></View>
  }
 
   return (
     <SafeAreaView style={{width: '100%', margin: 0}}>
       <FlatList data={photos} renderItem={listItem}  keyExtractor={photo => photo.id} numColumns={3}/>
     </SafeAreaView>
   );
 };
 
 
 
 export default PhotoGrid;
 