import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// navigation
import NavigationStack from './src/navigations/NavigationStack';
import NavigationTab from './src/navigations/NavigationTab';
import NavigationDrawer from './src/navigations/NavigationDrawer';

// Login
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack/> */}
      <NavigationTab />
      {/* <NavigationDrawer /> */}
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
