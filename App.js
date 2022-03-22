/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/components/Home';
import { GalleryContextProvider } from './src/context';



const App  = () => {
  return (
    <GalleryContextProvider>
      <Home />
    </GalleryContextProvider>
  );
};



export default App;
