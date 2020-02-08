import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tab1Page from './components/tabs/Tab1Page';
import Tab2Page from './components/tabs/Tab2Page';
import Tab3Page from './components/tabs/Tab3Page';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tab1Component1 from './components/tabs/Tab1Components/Tab1Component1';
import Tab1Component2 from './components/tabs/Tab1Components/Tab1Component2';
import Tab1Component3 from './components/tabs/Tab1Components/Tab1Component3';

import Tab2Component1 from './components/tabs/Tab2Components/Tab2Component1';
import Tab2Component2 from './components/tabs/Tab2Components/Tab2Component2';
import Tab2Component3 from './components/tabs/Tab2Components/Tab2Component3';

import Tab3Component1 from './components/tabs/Tab3Components/Tab3Component1';
import Tab3Component2 from './components/tabs/Tab3Components/Tab3Component2';
import Tab3Component3 from './components/tabs/Tab3Components/Tab3Component3';

const TabNavigator = createBottomTabNavigator({
  TabOne: {
    screen: createStackNavigator({
      Tab1: {
        screen: Tab1Page
      },
      stacknavs1: createStackNavigator({
        Tab1Comp1: {
          screen: Tab1Component1,
          navigationOptions: {
            headerShown: false
          }
        },
        Tab1Comp2: {
          screen: Tab1Component2,
          navigationOptions: {
            headerShown: false
          }
        },
        Tab1Comp3: {
          screen: Tab1Component3,
          navigationOptions: {
            headerShown: false
          }
        }
      })
    })
  },
  TabTwo: {
    screen: createStackNavigator({
      Tab2: {
        screen: Tab2Page
      },
      stacknavs2: createStackNavigator({
        Tab2Comp1: {
          screen: Tab2Component1,
          navigationOptions: {
            headerShown: false
          }
        },
        Tab2Comp2: {
          screen: Tab2Component2,
          navigationOptions: {
            headerShown: false
          }
        },
        Tab2Comp3: {
          screen: Tab2Component3,
          navigationOptions: {
            headerShown: false
          }
        }
      })
    })
  },
  TabThree: {
    screen: createStackNavigator({
      Tab3: {
        screen: Tab3Page
      },
      stacknavs3: createStackNavigator({
        Tab3Comp1: {
          screen: Tab3Component1,
          navigationOptions: {
            headerShown: false
          }
        },
        Tab3Comp2: {
          screen: Tab3Component2,
          navigationOptions: {
            headerShown: false
          }
        },
        Tab3Comp3: {
          screen: Tab3Component3,
          navigationOptions: {
            headerShown: false
          }
        }
      })
    })
  }
});

const stackNav = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false
    }
  }
})

const tabsNav = createAppContainer(stackNav);

export default tabsNav;
