import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import Home from './Home';
import Escopos from './Escopos';

export default class Main extends Component {
  
    render() {
      return (
        <View style={styles.main}>
            <bottomTab.Navigator
              initialRouteName='Home'
  
              screenOptions={ ({ route }) => ({
                tabBarIcon: () => {
                  if (route.name === 'Home') {
                    return(
                      <Image 
                        source={require('../../Assets/IconsNavigation/home.png')}
                        style={styles.tabBarIcon}
                      />
                    )
                  }
                  if (route.name === 'Escopos') {
                    return(
                      <Image
                        source={require('../../Assets/IconsNavigation/escopos.png')}
                        style={styles.tabBarIcon}
                      />
                    )
                  }
                },
  
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#EDB205',
                tabBarInactiveBackgroundColor: '#EDB205',
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: '#FFFFFF',
              }) }
            >
              <bottomTab.Screen name="Home" component={Home} />
              <bottomTab.Screen name="Escopos" component={Escopos} />
  
            </bottomTab.Navigator>
  
        </View>
      );
    }
  };
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#EDB205'
    },
  });