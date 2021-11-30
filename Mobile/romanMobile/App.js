/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';

 import React from 'react';
 import { StatusBar } from 'react-native';
 
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../romanMobile/src/screens/Main'

const AuthStack = createStackNavigator();

export default function Stack(){
  return(  
  <NavigationContainer>
    <StatusBar backgroundColor="#EDB205" />
    <AuthStack.Navigator initialRouteName="Main" screenOptions={{
    headerShown: false,
  }}>

      <AuthStack.Screen name="Main" component={Main}/>

    </AuthStack.Navigator>
  </NavigationContainer>
  )
}