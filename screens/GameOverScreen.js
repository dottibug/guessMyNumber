import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import Button from '../components/Button';
import { colors } from '../styles/styles';

export default function GameOverScreen({ rounds, userNumber }) {
  const summary = `It took ${rounds + 1} rounds to guess the number ${userNumber}.`;

  function handleNewGame() {
    console.log('start new game');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.gameOverScreenContainer}>
        <Text style={styles.title}>Game Over</Text>
        <Image source={require('../assets/images/success.png')} style={styles.image} />
        <View style={styles.summaryContainer}>
          <Text>
            <Text style={styles.summaryText}>{` It took `}</Text>
            <Text style={styles.summaryTextBold}>{rounds + 1}</Text>
            <Text style={styles.summaryText}>{` rounds to guess the number `}</Text>
            <Text style={styles.summaryTextBold}>{userNumber}</Text>
            <Text style={styles.summaryText}>.</Text>
          </Text>
        </View>
        <View style={styles.btnLayoutHorizontal}>
          <Button text="New Game" onPress={handleNewGame} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gameOverScreenContainer: {
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
  summaryContainer: {
    padding: 16,
  },
  summaryText: {
    textAlign: 'center',
    fontSize: 28,
  },
  summaryTextBold: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.indigo,
  },
  btnLayoutHorizontal: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.indigo,
    alignSelf: 'center',
  },
});
