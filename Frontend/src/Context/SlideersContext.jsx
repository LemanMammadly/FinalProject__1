import React, { createContext, useState } from 'react'

export const Slider= createContext()


const SlideersContext = ({children}) => {
    const [slider,setSlider]=useState([])
  return (
    <Slider.Provider value={{slider,setSlider}}>
        {children }
    </Slider.Provider>
  )
}

export default SlideersContext