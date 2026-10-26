
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text, Button } from 'react-native-paper';

export default function App() {
  const [display, setDisplay] = useState('0');

  function adicionarNumero(numero) {
    setDisplay((atual) => atual === '0' ? numero : atual + numero);
  }

  function limpar() {
    setDisplay('0');
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora</Text>

        <View style={styles.display}>
          <Text variant="headlineLarge">{display}</Text>
        </View>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => limpar()}>C</Button>
          <Button mode="contained" onPress={() => adicionarNumero('7')}>7</Button>
          <Button mode="contained" onPress={() => adicionarNumero('8')}>8</Button>
          <Button mode="contained" onPress={() => adicionarNumero('9')}>9</Button>
        </View>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => adicionarNumero('4')}>4</Button>
          <Button mode="contained" onPress={() => adicionarNumero('5')}>5</Button>
          <Button mode="contained" onPress={() => adicionarNumero('6')}>6</Button>
          <Button mode="contained">+</Button>
        </View>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => adicionarNumero('1')}>1</Button>
          <Button mode="contained" onPress={() => adicionarNumero('2')}>2</Button>
          <Button mode="contained" onPress={() => adicionarNumero('3')}>3</Button>
          <Button mode="contained">-</Button>
        </View>

        <View style={styles.linha}>
          <Button mode="contained" onPress={() => adicionarNumero('0')}>0</Button>
          <Button mode="contained">×</Button>
          <Button mode="contained">÷</Button>
          <Button mode="contained">=</Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  display: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'flex-end',
    marginBottom: 20,
    borderRadius: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
