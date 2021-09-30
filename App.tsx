import React from 'react'
import { SafeAreaView } from 'react-native'
//import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'
//import HolaMunsdoScreens from './src/screens/HolaMunsdoScreens'
//import CounterScreen from './src/screens/CounterScreen';
//import PositionScreen from './src/screens/PositionScreen';
//import FlexScreen from './src/screens/FlexScreen';
import TareaScreen from './src/screens/TareaScreen';


export const App = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
        {/* <HolaMunsdoScreens/> */}
          {/* <CounterScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen/> */}
        <TareaScreen/>
      </SafeAreaView>
  
  )
}
