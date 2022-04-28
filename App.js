import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Dashboard from './src/pages/Dashboard';
import Header from './src/components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Dashboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A365D',
    paddingHorizontal: 32,
    paddingTop: 32,
  },
});

export default App;
