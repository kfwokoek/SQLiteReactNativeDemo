import { Stack, SplashScreen } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import UserProvider from "../context/UserProvider";


const RootLayout = () => {
    return (
        <UserProvider>
            <Stack>
                <Stack.Screen name="(notabs)" options={{ headerShown : false, gestureEnabled: false }} />
            </Stack>
        </UserProvider>
    )
}

export default RootLayout