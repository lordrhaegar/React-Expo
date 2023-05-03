import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = (selectedJob,item,cardPress) => {
  return (
    <TouchableOpacity styles={styles.container(selectedJob,item)}>
      onPress={()=>{
        cardPress(item);
      }}
      <TouchableOpacity>
        <Image
        source={{uri: item.employer_logo}}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard