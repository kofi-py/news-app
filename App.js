import {React} from 'react';
import AppContainer from './src/navigation/AppNavigator';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <AppContainer />
    </ErrorBoundary>
  );
}
