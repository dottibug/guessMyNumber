import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import { colors } from '../styles/styles';
import Button from '../components/Button';
import { useState } from 'react';
import * as Crypto from 'expo-crypto';
import GuessLogItem from '../components/GuessLogItem';

export default function GameScreen({ userNumber }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [guess, setGuess] = useState(null);
  const [guessLog, setGuessLog] = useState([]);

  if (guess === null) {
    const firstGuess = getRandomNumber(min, max);
    setGuess(firstGuess);
    setGuessLog((currentGuessLog) => [
      ...currentGuessLog,
      {
        guess: firstGuess,
        key: Crypto.randomUUID(),
      },
    ]);
  }

  console.log(`guess log is: ${guessLog}`);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleHighLow(input) {
    let newGuess;

    if (input === 'higher') {
      const newMin = guess + 1;
      setMin(newMin);
      newGuess = getRandomNumber(newMin, max);
    } else {
      const newMax = guess;
      setMax(newMax);
      newGuess = getRandomNumber(min, newMax);
    }

    setGuess(newGuess);
    setGuessLog((currentGuessLog) => [
      ...currentGuessLog,
      {
        guess: newGuess,
        key: Crypto.randomUUID,
      },
    ]);
  }

  console.log(`New max is: ${max}`);
  console.log(`New min is: ${min}`);
  console.log(`New guess is: ${guess}`);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.gameScreenContainer}>
        <View>
          <Text style={styles.title}>Current Guess</Text>
          <Text style={styles.guess}>{guess}</Text>
        </View>
        <View style={styles.highLowContainer}>
          <Text style={styles.highLowHeader}>Higher or Lower?</Text>
          <View style={styles.btnLayoutHorizontal}>
            <Button text="–" onPress={() => handleHighLow('lower')} />
            <Button text="+" onPress={() => handleHighLow('higher')} />
          </View>
        </View>
        d
        <FlatList
          data={guessLog.reverse()}
          renderItem={({ item, index }) => (
            <GuessLogItem guess={item.guess} index={index} numGuesses={guessLog.length} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gameScreenContainer: {
    gap: 32,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 24 : 24,
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.indigo,
  },
  guess: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.indigo,
  },
  highLowContainer: {
    gap: 32,
    backgroundColor: colors.light,
    padding: 24,
    borderRadius: 20,
  },
  highLowHeader: {
    fontSize: 24,
    color: colors.forest,
    textAlign: 'center',
  },
  btnLayoutHorizontal: {
    flexDirection: 'row',
    gap: 16,
  },
});
