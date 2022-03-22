
export const ENTER_FULLSCREEN_MODE = 'enter_fullscreen_mode'
export const EXIT_FULLSCREEN_MODE = 'exit_fullscreen_mode'
export const LOADING_SUCCESSFUL = 'loading_successful'
export const SET_PHOTOS = "set_photos"
export const BEGIN_LOADING = 'begin_loading'
export const SET_PREVIOUS_PHOTO = 'set_previous_photo'
export const SET_NEXT_PHOTO = 'set_next_photo'

const galleryReducer = (state, action) => {
    if (action.type === ENTER_FULLSCREEN_MODE) {
        return {...state, isInFullscreenMode: true, fullscreenImageIndex: action.payload}
    }
    if (action.type === EXIT_FULLSCREEN_MODE) {
        return {...state, isInFullscreenMode: false}
    }
    if (action.type === SET_PHOTOS) {
        return {...state, photos: action.payload}
    }
    if (action.type === LOADING_SUCCESSFUL) {
        return {...state, isLoading: false, photos: action.payload}
    }
    if (action.type === BEGIN_LOADING) {
        return {...state, isLoading: true}
    }
    if (action.type === SET_PREVIOUS_PHOTO) {
        console.log("current: " + state.fullscreenImageIndex)
        console.log("new id " + Math.max(0, state.fullscreenImageIndex-1))
        return {...state, fullscreenImageIndex: Math.max(0, state.fullscreenImageIndex-1)}
    }
    if (action.type === SET_NEXT_PHOTO) {
        console.log("current: " + state.fullscreenImageIndex)
        console.log("new id " + Math.min(state.photos.length-1, state.fullscreenImageIndex+1))
        return {...state, fullscreenImageIndex: Math.min(state.photos.length-1, state.fullscreenImageIndex+1)}
    }
    return state;
}

export default galleryReducer;