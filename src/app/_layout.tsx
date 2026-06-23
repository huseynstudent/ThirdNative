import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Iceberg-Regular": require("@/assets/fonts/Iceberg/Iceberg-Regular.ttf"),
  })

  useEffect(()=>{
    if (loaded || error){
      SplashScreen.hideAsync();
    }
  }, [loaded, error])

  if (!loaded) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>Error loading fonts</Text>
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
