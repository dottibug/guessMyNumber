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

export default function GameOverScreen({ rounds, userNumber, startNewGame }) {
  function handleNewGame() {
    startNewGame();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.gameOverScreenContainer}>
        <Text style={styles.title}>Game Over</Text>
        <Image source={require('../assets/images/success.png')} style={styles.image} />
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>
            It took <Text style={styles.summaryTextBold}>{rounds + 1}</Text> rounds to
            guess the number <Text style={styles.summaryTextBold}>{userNumber}</Text>.
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
