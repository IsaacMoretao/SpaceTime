import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import Background from './assets/background.svg'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })
  if (!hasLoadedFonts) {
    return null
  }
  return (
    <Text className="flex-1 items-center justify-center bg-gray-900">
      <Text className="font-alt text-5xl font-bold text-gray-50">
        Rocketseat
      </Text>
      <StatusBar style="light" translucent />
    </Text>
  )
}
