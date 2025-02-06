import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.based}>
        <Text style={styles.title}>
        <Text style={styles.boldText}>Jermaine</Text>
        <Text style={styles.italicText}> Poquiz</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#eaeaea'
  },
  title: {
    backgroundColor: '#61dafb',
    paddingVertical: 8,
    textAlign: 'center',
    borderColor: '#20203a',
    borderRadius: 6,
    marginTop: 16,
    borderWidth: 4,
    fontSize: 30,
    color: '#20322a',
  },
boldText: { 
    fontWeight: 'bold',
  },
italicText: {
  fontStyle: 'italic',
  },
});

export default App;
