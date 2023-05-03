import { View, ScrollView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome  } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Home =()=>{
    const router = useRouter();
    return(
        <SafeAreaView style={{flex : 1, backgroundColor : COLORS.lightWhite}}>
            <Stack.Screen 
            options={{
                headerStyle : {
                    backgroundColor : COLORS.lightWhite,
                },
                    headerShadowVisible : false,
                    headerLeft:()=>{return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>},
                    headerRight:()=>{return <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>},
                    headerTitle: ""

            }}/>
                <View style={{padding: SIZES.small, flex: 1}}>
                <Welcome/>
                <Popularjobs/>
                <Nearbyjobs/>
                </View>

        </SafeAreaView>
    )
}
export default Home;