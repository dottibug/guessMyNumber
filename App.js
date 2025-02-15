import { StyleSheet, View, ImageBackground } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const bgImage = './assets/images/background.png';

  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(null);

  function handleStartGame(number) {
    setUserNumber(number);
  }

  function handleEndGame(rounds) {
    setRounds(rounds);
    setGameOver(!gameOver);
  }

  function renderScreen() {
    if (userNumber === null) return <StartScreen startGame={handleStartGame} />;

    if (!gameOver) return <GameScreen userNumber={userNumber} endGame={handleEndGame} />;

    return <GameOverScreen rounds={rounds} userNumber={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(bgImage)}
        resizeMode="cover"
        style={styles.bgImage}>
        <LinearGradient colors={['#9EB7B8', '#3C6E71']} style={styles.background} />
        {renderScreen()}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.75,
  },
  bgImage: {
    flex: 1,
    width: '100%',
  },
});
