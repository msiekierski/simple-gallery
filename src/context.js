import React, { useContext, useReducer, useEffect } from 'react'
import galleryReducer, { BEGIN_LOADING, ENTER_FULLSCREEN_MODE, EXIT_FULLSCREEN_MODE, LOADING_SUCCESSFUL, SET_NEXT_PHOTO, SET_PREVIOUS_PHOTO } from './reducers/galleryReducer'

 import {PermissionsAndroid} from 'react-native'
import findImages from './utils/findAllFilesByExtension'

const GalleryContext = React.createContext()

const initialState = {
  photos: [],
  isPerrmisionGranted: false,
    isInFullscreenMode: false,
    isLoading: false,
    fullscreenImageIndex: 0,
}
const GalleryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(galleryReducer, initialState)

    useEffect(() => {
        const fetch = async () => {
          dispatch({ type: BEGIN_LOADING })
          await requestStoragePermission();
          const result = await findImages("/storage/emulated/0")
          const mappedResults = result.map((file, index) => ({ file, id: index }))
          dispatch({type: LOADING_SUCCESSFUL, payload: mappedResults})
        }
     fetch()
    }, [])
   
    
    const requestStoragePermission = async () => {
     try {
       const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
         {
           title: "Permission title",
           message:
             "Permission message",
           buttonNeutral: "Ask Me Later",
           buttonNegative: "Cancel",
           buttonPositive: "OK",
         }
       );
       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         console.log("You can use the EXTERNAL_STORAGE");

       } else {
         console.log("EXTERNAL_STORAGE permission denied");
       }
     } catch (err) {
       console.warn(err);
     }
    };
    
    const previousPhoto = () => {
        dispatch({type: SET_PREVIOUS_PHOTO})
    }

    const nextPhoto = () => {
        dispatch({type: SET_NEXT_PHOTO})
    }

    const enterFullscreenMode = (index) => {
        dispatch({type: ENTER_FULLSCREEN_MODE, payload: index})
    }

    const exitFullscreenMode = () => {
        dispatch({type: EXIT_FULLSCREEN_MODE})
    }

    return <GalleryContext.Provider value={{...state, nextPhoto, previousPhoto, enterFullscreenMode, exitFullscreenMode, requestStoragePermission}}>{children}</GalleryContext.Provider>
}

const useGalleryContext = () => {
    return useContext(GalleryContext)
}

export {GalleryContextProvider, useGalleryContext}
