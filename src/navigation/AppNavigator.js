import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  News: {
    screen: NewsListScreen
  },
  NewsItem: {
    screen: NewsItemScreen,
    navigationOptions: {
      headerTitle: 'News Item'
    }
  }
})

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: StackNavigator
  },
  Favorites: {
    screen: FavoritesScreen
  }
});

const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer

