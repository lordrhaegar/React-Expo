import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handPress}) => {
  handPress = ()=>{
    
  }
  return (
    <TouchableOpacity onPress={handPress} style={styles.btnContainer}>
      <Image 
      source={iconUrl}
      resizeMode = "cover"
      style={styles.btnImg(dimension)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn