import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/styles';

export default function Button({ text, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonPrimary,
        pressed && styles.buttonPrimaryPressed,
      ]}>
      <Text style={styles.buttonPrimaryText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.indigo,
    padding: 12,
    width: 120,
    borderRadius: 100,
  },
  buttonPrimaryPressed: {
    opacity: 0.75,
  },
  buttonPrimaryText: {
    color: colors.light,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
