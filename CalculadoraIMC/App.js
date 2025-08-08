import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {

  const [peso,setPeso] = useState(0);
  const [altura,setAltura] = useState(0);
  const [imc,setImc] = useState(0);
  const [mensaje,setMensaje] = useState("");

  const calcularIcm=()=>{
    let r = parseFloat(peso) / ((parseFloat(altura)/100) * (parseFloat(altura)/100));
    setImc(r.toFixed(2)); // Redondea a dos decimales
    if(r < 18.5){
      setMensaje("Su peso es inferior al normal D:");
    }else if(r >= 18.5 && r < 24.9){
      setMensaje("Su peso es normal :)");
    }else if(r >= 25 && r < 29.9){
      setMensaje("Su peso es superior al normal :|");
    }else{
      setMensaje("Esta en obeso D:");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <Text style={styles.titulo}>Indice de Masa Corporal</Text>
      <TextInput
        style={styles.caja}
        value={peso}
        onChangeText={setPeso}
        placeholder="Ingrese su peso en kg"
      />
      <TextInput
        style={styles.caja}
        value={altura}
        onChangeText={setAltura}
        placeholder="Ingrese su altura en centimetros"
      />
      <Button
        title="Calcular IMC"
        onPress={calcularIcm}
      />
      <Text style={styles.titulo}>Su IMC es: {imc}</Text>
      <Text styles={styles.titulo}>{mensaje}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10
  },
  caja:{
    borderColor:'gray',
    borderWidth:1,
    paddingHorizontal:5,
    marginBottom:10
  },
  titulo:{
    fontSize:16,
    marginBottom:20,
    fontWeight:"bold",
    textAlign: 'center', //Centra el texto al eje
    color:'blue' 
  }
});
