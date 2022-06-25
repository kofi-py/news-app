import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 

import Card from './src/components/Card';
import Header from './src/components/Header';


export default function App() {
  return (
    <View>
      <Header title="News App" />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'silver',
    padding: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
