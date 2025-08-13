import { Button, StyleSheet, Text, View } from 'react-native';

export const Productos=({navigation})=>{
    return <View style={styles.container}>
        <Text>Productos</Text>
        <Button
            title='Volver al Home'
            onPress={()=>{
                navigation.navigate("HomeNav");
            }}
        />

    </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
});