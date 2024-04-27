import React, { useReducer } from 'react'
import { GALLERY_IMAGES } from '../utils/constant';

const initialState = {
    currentImageIndex:0
}

const imageReducer = (state,action)=>{
    switch (action.type){
        case 'NEXT_IMAGE':
            return{
                currentImageIndex: state.currentImageIndex < GALLERY_IMAGES.length-1 ? state.currentImageIndex+1 : state.currentImageIndex
            }
            case 'PREVIOUS_IMAGE':
                return{
                    currentImageIndex: state.currentImageIndex > 0 ? state.currentImageIndex-1 : state.currentImageIndex
                }
            default:
                return state
    }
}


export default function ImageGallery() {
    const [state,dispatch] = useReducer(imageReducer,initialState);
    const currentImage = GALLERY_IMAGES[state.currentImageIndex]
  return (
    <div>
        <h1>ImageGallery</h1>
        <img src={currentImage} alt="Marvel Slides" width="500" height="500" />
        <br/>
        <button disabled={state.currentImageIndex === 0} onClick={()=> dispatch({type:'PREVIOUS_IMAGE'})}>Previous Image</button>
        <button disabled={state.currentImageIndex === GALLERY_IMAGES.length-1} onClick={()=> dispatch({type:'NEXT_IMAGE'})}>Next Image</button>
    </div>
  )
}
