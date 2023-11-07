import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableHighlight } from 'react-native';

export default function App() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);
  const [area, setArea] = useState(0)
  const [error,setError]= useState('')

  const calcularArea = () => {
    if (base!=0 && altura!=0) {
      setArea(base * altura) / 2;
      // setArea(area.toLocaleString());
      setError('');
    } else {
      setError('Valores inválidos');
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.titulo}>Calculadora de Área do triângulo</Text> */}
        <Image style={styles.stretch}
          source={require('./assets/atri.jpeg')} />
        <StatusBar style="auto" />
        <Text style={styles.labels}>Base:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(e)=>setBase(Number(e))}
        />
        <Text style={styles.labels}>Altura:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(e)=>setAltura(Number(e))}
        />
        <TouchableHighlight onPress={calcularArea}>
        <View style={styles.button}>
          <Text>Calcular</Text>
        </View>
      </TouchableHighlight>
        <Text style={styles.labels}>Área:{area}</Text>
        <Text style={styles.error}>{error}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'center',
    borderWidth:5,
    borderRadius:20,
    marginTop:30
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo: {
    marginTop:30,
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labels: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  error:{
    color:'red',
  }
});