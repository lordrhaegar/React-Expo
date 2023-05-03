import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen"
SplashScreen.preventAutoHideAsync();
const Layout = ()=>{
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    },[fontsLoaded])
    const onLoaded = useCallback(async ()=>{
        if (fontsLoaded){
            await SplashScreen.hideAsync();   
        }
        if (!fontsLoaded) {
            return null;
        }
    })
    return <Stack onLayout={onLoaded}/>;
}
export default Layout;