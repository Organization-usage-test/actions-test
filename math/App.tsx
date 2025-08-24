import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { division, sum } from './mathOps';

export default function App() {
  const [op1, setOp1] = useState('');
  const [op2, setOp2] = useState('');
  const [result, setResult] = useState('');

  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      {/* // <View style={styles.container}> */}
      <TextInput
        label="Operador 1"
        testID="operator1"
        value={op1}
        onChangeText={value => {
          if (value.search(/^[+-]?\d*\.?\d*$/) !== -1) setOp1(value);
        }}
        onBlur={() => {
          if (op1.endsWith('.')) setOp1(prev => `${prev}0`);
        }}
        style={styles.input}
      />
      <TextInput
        label="Operador 2"
        testID="operator2"
        value={op2}
        onChangeText={value => {
          if (value.search(/^[+-]?\d*\.?\d*$/) !== -1) setOp2(value);
        }}
        onBlur={() => {
          if (op2.endsWith('.')) setOp2(prev => `${prev}0`);
        }}
        style={styles.input}
      />
      <Button
        icon="slash-forward"
        mode="contained"
        testID="triggerDivision"
        onPress={() =>
          setResult(
            division({
              divNumber: Number(op1),
              divisor: Number(op2),
            }).toString(),
          )
        }
        style={styles.button}
      >
        Dividir
      </Button>
      <Button
        icon="plus"
        mode="contained"
        testID="triggerSum"
        onPress={() =>
          setResult(
            sum({
              operand1: Number(op1),
              operand2: Number(op2),
            }).toString(),
          )
        }
        style={styles.button}
      >
        Sumar
      </Button>
      <View style={styles.textWrapped}>
        <Text variant="headlineSmall">{result}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    gap: 40,
    // backgroundColor: 'yellow',
  },
  input: {
    // borderColor: 'black',
    // borderWidth: 1,
    // width: '100%',
    // paddingVertical: 10,
    width: '80%',
  },
  button: {
    width: '80%',
    borderRadius: 10,
  },
  textWrapped: {
    backgroundColor: 'orange',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // verticalAlign: 'middle',
    // textAlign: 'center',
  },
  // text: {
  //   backgroundColor: 'orange',
  // },
});
