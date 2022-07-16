import {React} from 'react';
import AppContainer from './src/navigation/AppNavigator';
import ErrorBoundary from './ErrorBoundary';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </ErrorBoundary>
  );
}
