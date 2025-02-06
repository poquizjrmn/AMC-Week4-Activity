import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         One evening, a commodity inconceivable happened. The Elder tree started to glow, and its leaves made a soft, musical sound. Everyone in the village gathered around, curious about what was passing.

Elara felt like the Elder tree was calling her, so she went closer to the tree. The Elder tree spoke to her friendly with a friendly and magical voice.

” Elara, you have a special job. Find some special scrolls in the Sacred Cave to cover Eldoria from darkness.”

Elara was a little spooked but also agitated to help her village. With the village elder’s blessings, she went on an adventure with her new friend, Faelin, a talking fox.

Their journey was full of Adventure. They met friendly brutes, like brownies and talking creatures, and answered mystifications and magical challenges. But Elara and Faelin always stayed and did not give up.

After a while, they reached the Sacred Cave and retired deep in Eldoria. Outside, they set up the special scrolls. Elara read them precisely and learned an important spell that would keep Eldoria safe.

With Faelin’s help, Elara rehearsed the spell until she could do it impeccably. When she did, a bright light filled the delve, and Eldoria was safe from the darkness that wanted to hurt it.

Elara came back to her village, and everyone was really happy for her. But she did not want to be notorious. She kept taking care of the Elder tree because she loved it and knew it was important.

And so, Elara’s adventure in Eldoria became a notorious story. It’s about a stalwart girl who heeded the wise Elder tree, defended her home, and made it a safe and magical place for everyone to enjoy.

Moral: Embrace courage, humility, and responsibility. Elara, guided by the wise Elder tree, exemplifies that ordinary individuals can become heroes. True heroism lies in daily choices to protect and nurture what matters. Elara’s commitment to her village and love for the Elder tree showcase the power of determination and kindness.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default App;
