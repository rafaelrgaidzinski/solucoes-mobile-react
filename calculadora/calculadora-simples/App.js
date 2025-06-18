import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const isOperator = (value) => ['+', '-', '*', '/'].includes(value);

  const handlePress = (value) => {
    if (value === 'C') {
      setDisplay('');
      setResult('');
      return;
    }

    if (value === '=') {
      try {
        const evalResult = eval(display).toString();
        setResult(evalResult);
      } catch {
        setResult('Erro');
      }
      return;
    }

    // Se um operador for pressionado após o "="
    if (isOperator(value)) {
      if (result && !display.includes(result)) {
        setDisplay(result + value);
        return;
      }

      // Evita operadores duplos
      const lastChar = display[display.length - 1];
      if (isOperator(lastChar)) {
        setDisplay(display.slice(0, -1) + value);
        return;
      }
    }

    if (result) {
      const lastChar = display[display.length - 1];

      // Se o último char é um operador, continue o cálculo
      if (isOperator(lastChar)) {
        setDisplay(display + value);
      } else if (isOperator(value)) {
        // Se pressionou um operador, aplica ao resultado
        setDisplay(result + value);
      } else {
        // Caso contrário, é um novo cálculo
        setDisplay(value);
      }
      setResult('');
      return;
    }

    setDisplay(display + value);
  };

  const renderButton = (value) => (
    <Button key={value} mode="contained" onPress={() => handlePress(value)} style={styles.button}>
      {value}
    </Button>
  );

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.display}>{display || '0'}</Text>
        <Text style={styles.result}>{result}</Text>

        <SafeAreaView style={styles.row}>
          {['7', '8', '9', '/'].map((value) => renderButton(value))}
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          {['4', '5', '6', '*'].map((value) => renderButton(value))}
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          {['1', '2', '3', '-'].map((value) => renderButton(value))}
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          {['0', 'C', '=', '+'].map((value) => renderButton(value))}
        </SafeAreaView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 20,
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    margin: 4,
    paddingVertical: 10,
  },
});
