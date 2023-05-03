import React from 'react'
import { useState } from 'react'
import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator} from 'react-native'

import styles from './popularjobs.style'
 import { SIZES, COLORS,  } from '../../../constants'
 import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router'
import apiUser from '../../../hooks/apiUser';
const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = apiUser("search",{query: "React Developer",num_pages: 1})
  console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      <View style={styles.cardsContainer}>
      {isLoading ?(<ActivityIndicator size="large"/>) 
      : error? (<Text>Something went wrong</Text>)
      : (
        <FlatList
        data={[1,2,3,4]}
        renderItem={({item})=>(
          <PopularJobCard 
          item={item}/>
        )}
        keyExtractor={item => item?.job_id}
        contentContainerStyle={{columnGap: SIZES.medium}}
        horizontal ={true}
        />
      )}
      </View>
    </View>
    
  )
}

export default Popularjobs