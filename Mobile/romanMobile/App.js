import 'react-native-gesture-handler';

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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = createStackNavigator();

import Login from './src/screens/login';
import Main from './src/screens/Main';


export default function Stack() {

  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
        backgroundColor="#EDB205"
      />

      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Main" component={Main} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}