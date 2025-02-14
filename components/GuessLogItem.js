import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../styles/styles';

// The logs are being processed in a FlatList in reverse; thus the guess number is numGuess (number of guesses in the guess log) - index of the reversed guessLog array
export default function GuessLogItem({ guess, index, numGuesses }) {
  return (
    <View style={styles.log}>
      <Text style={styles.logText}>{`#${numGuesses - index}`}</Text>
      <Text style={styles.logText}>{`Guessed: ${guess}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  log: {
    backgroundColor: colors.indigo,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 100,
    marginTop: 4,
    marginBottom: 4,
  },
  logText: {
    fontSize: 18,
    color: colors.light,
  },
});
