import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';
import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen';
import { createAppContainer } from 'react-navigation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const StackNavigator = createStackNavigator({
  News: {
    screen: NewsListScreen
  },
  NewsItem: {
    screen: NewsItemScreen,
    navigationOptions: {
      headerTitle: 'Details'
    }
  }
})

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: StackNavigator,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="home" size={24} />
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="favorite" size={24} />
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: () => <AntDesign name="infocirlce" size={24} color="black" />
    }
  }
});


const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer

