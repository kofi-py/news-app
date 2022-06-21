import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default function App() {
  return (
    <View>
      <Header title="News App" />
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
