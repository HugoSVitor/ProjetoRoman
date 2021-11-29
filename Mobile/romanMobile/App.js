import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import Cadastro from './src/screens/cadastro';


export default function Stack() {
  return (
    <NavigationContainer>

      <AuthStack.Navigator>
        <AuthStack.Screen name="Cadastro" component={Cadastro} />
      </AuthStack.Navigator>
    </NavigationContainer>

  );
}