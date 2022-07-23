import {React} from 'react';
import AppContainer from './src/navigation/AppNavigator';
import ErrorBoundary from './ErrorBoundary';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}


