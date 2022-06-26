import {React, useState} from 'react';
import { View } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Card from './src/components/Card';
import Header from './src/components/Header';

const loadFonts = () => {
  return Font.loadAsync({
    'Graphik': require('./assets/fonts/regular.ttf'),
    'Graphik-Bold': require('./assets/fonts/semibold.ttf')
  });
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    <AppLoading 
     startAsync={loadFonts}
     onFinish={() => setFontLoaded(true)}
    />
  }
  return (
    <View>
        <Header title="News App" />
        <Card />
    </View>
  );
}
