import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [dolar,setDolar] = useState("");
  const [resultado,setResultado] = useState("");

  return (
    <View style={styles.container}>
      <Text>Convertidor de Dolares</Text>
      <Text>Ingrese la Cantidad den Dolares</Text>
      <TextInput
        style={styles.cajaTexto}
        onChangeText={(txt)=>{
          setDolar(txt);
        }}
      />
      <Button
        title="Pesos Mexicanos"
        onPress={()=>{
          setResultado(parseFloat(dolar) * 18.72);
        }}
      />
      <Button
        title="Pesos Colombianos"
        onPress={()=>{
          setResultado(parseFloat(dolar) * 4090.50);
        }}
      />
      <Button
        title="Euros"
        onPress={()=>{
          setResultado(parseFloat(dolar) * 0.86);
        }}
      />
      <Text>Resultado: {resultado}</Text>
      <StatusBar style="auto" />
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
  cajaTexto:{
    borderColor:"black",
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  }
});
