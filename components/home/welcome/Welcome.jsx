import {React, useState} from 'react'
import { 
   View,
   Text,
   TouchableOpacity, 
   TextInput,
   Image,
   FlatList
} from 'react-native'
import {useRouter} from 'expo-router';
import styles from './welcome.style'
import {SIZES, STYLE, icons} from '../../../constants';
const jobTypes = ["Full-time","Part-time","Contractor","Freeance","Banker"];
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Part-time");
  return (
    <View>
      <View >
        <Text style={styles.userName}>Hello Barth</Text>
        <Text style={styles.welcomeMessage}>Search for Jobs Here</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you lookoing for"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={true}
          />
        </View>
        <TouchableOpacity onPress={()=>{}} style={styles.searchBtn}>
          <Image source={icons.search}
          style={styles.searchBtnImage}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
          <FlatList 
          horizontal={true}
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
              setActiveJobType(item)
              router.push(`/search/${item}`)}}>
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.medium}}

          />
      </View>
    </View> 
  
  )
}

export default Welcome