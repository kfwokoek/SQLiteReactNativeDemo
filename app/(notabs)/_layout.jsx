import { Stack, SplashScreen } from 'expo-router'
import { StatusBar } from "expo-status-bar";


const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown : false, gestureEnabled: false }} />
            <Stack.Screen name="settings" options={{ headerShown : false, gestureEnabled: false }} />
        </Stack>
    )
}

export default RootLayout