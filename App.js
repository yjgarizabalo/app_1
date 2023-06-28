import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// navigation
import NavigationTab from './src/navigations/NavigationTab';
import NavigationStack from './src/navigations/NavigationStack';
import NavigationDrawer from './src/navigations/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
