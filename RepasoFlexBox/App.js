import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor1}>
        <Button title="X"/>
        <Button title="Y"/>
        <Button title="Z"/>
      </View>
      <View style={styles.contenedor2}>
        <View style={styles.contenedor4}>
          <View style={styles.contenedor6}>
            <Button title="BOTON 1"/>
            <Button title="BOTON 2"/>
          </View>
          <View style={styles.contenedor7}>
            <Button title="OPERACION 1"/>
            <Button title="OPERACION 2"/>
            <Button title="OPERACION 3"/>
          </View>
        </View>
        <View style={styles.contenedor5}>
          <Button title="ACCION 1"/>
          <Button title="ACCION 2"/>
        </View>
      </View>
      <View style={styles.contenedor3}>
        <Button title="BOTON FINAL"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    
  },
  contenedor1:{
    flex:1,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contenedor2:{
    flex:6,
    backgroundColor: 'green',
  },
  contenedor3:{
    flex:1,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contenedor4:{
    flex:4,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  contenedor5:{
    flex:1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  contenedor6:{
    flex:1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  contenedor7:{
    flex:1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
