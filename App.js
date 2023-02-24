import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Counter />
    </Provider>
  );
}
