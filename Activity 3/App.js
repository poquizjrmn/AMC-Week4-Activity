import React from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Morning',
    data: ['fixing the bed', 'drinking coffee', 'showering', 'jogging with friends', 'cooking breakfast', 'eating breakfast', 'dancing'],
  },
  {
    title: 'Afternoon',
    data: ['doing assignment', 'taking online class', 'singing', 'washing dishes', 'meeting with friends', 'talking with my online friends', ],
  },
  {
    title: 'Evening',
    data: ['drinking water', 'eating hapunan', 'drinking alcohol', 'playing online games', 'watching kdrama', 'talking with my mom', 'laughing with my brother'],
  },
  {
    title: 'Midnight',
    data: ['eating midnight snacks', 'walktrip with my friends', 'drinking again with my friends', 'buying alcohol with friends', 'sleeping'],
  },
];

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;