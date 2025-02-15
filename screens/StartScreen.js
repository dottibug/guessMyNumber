import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import { colors } from '../styles/styles';

export default function StartScreen({ startGame }) {
  const [number, setNumber] = useState('');

  function handleNumberInput(num) {
    setNumber(num);
  }

  function handleReset() {
    setNumber('');
  }

  function showAlert() {
    const title = 'Invalid Number';
    const message = 'Enter a number between 1 and 99';
    const button = [{ text: 'OK', style: 'default', onPress: handleReset }];
    Alert.alert(title, message, button);
  }

  function handleConfirm() {
    if (isNaN(number) || parseInt(number) < 1 || parseInt(number) > 99) {
      showAlert();
    } else startGame(number);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.startScreenContainer}>
        <Text style={styles.title}>Guess My Number</Text>
        <View style={styles.numberEntryContainer}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberHeader}>Enter a Number</Text>
            <TextInput
              keyboardType="numeric"
              value={number}
              onChangeText={handleNumberInput}
              style={styles.numberInput}
              maxLength={2}
            />
          </View>
          <View style={styles.btnLayoutHorizontal}>
            <Button text="Reset" onPress={handleReset} />
            <Button text="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  startScreenContainer: {
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
  numberEntryContainer: {
    gap: 32,
    backgroundColor: colors.light,
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
  },
  numberContainer: {
    gap: 12,
    alignItems: 'center',
  },
  numberHeader: {
    fontSize: 24,
    color: colors.forest,
  },
  numberInput: {
    paddingBottom: 4,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: colors.forest,
    width: 72,
    textAlign: 'center',
    color: colors.forest,
    margin: 12,
  },
  btnLayoutHorizontal: {
    flexDirection: 'row',
    gap: 16,
  },
});
