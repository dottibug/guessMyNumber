import { View, TextInput } from 'react-native';
import Button from '../components/Button';

export default function StartGameScreen() {
  function handleReset() {
    console.log('Reset');
  }

  function handleConfirm() {
    console.log('Confirm');
  }

  return (
    <View>
      <Text>Enter a Number</Text>
      <TextInput></TextInput>

      <View styles=>
        <Button text="Reset" onPress={handleReset} />
        <Button text="Confirm" onPress={handleConfirm} />
      </View>
    </View>
  );
}
