import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RootNavigations from './src/navigations/mainNavigations/index'
console.disableYellowBox = true;
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigations />
    </SafeAreaView>
  )
}

export default App