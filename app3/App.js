import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMultiplicacao = () => {
    if (num1 && num2) {
      const resultadoMultiplicacao = parseFloat(num1) * parseFloat(num2);
      setResultado(`${resultadoMultiplicacao}`);
    } else {
      setResultado('?'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiplicador de Números</Text> 
      
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro n°"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo n°"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={calcularMultiplicacao}
      >
        <Text style={styles.buttonText}>Calcular</Text> 
      </TouchableOpacity>

      <Text style={styles.resultText}>Resultado: {resultado}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffc107',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#cce5ff',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  }, 
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    marginTop: 20,
  },
});

export default App;
