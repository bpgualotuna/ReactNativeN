import { Button, StyleSheet, Text, View } from 'react-native';

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>HOME</Text>
        <View style={styles.areaBotones}>
            <Button
                style={styles.boton}
                title='IR A CONTACTOS'
                onPress={() => {
                    navigation.navigate("ContacsNav");
                }}
            />
            <Button
                style={styles.boton}
                title='IR A PRODUCTOS'
                onPress={()=>{
                    navigation.navigate("ProductosNav");
                }}
            />

        </View>

    </View>
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    },
    areaBotones: {
        
        backgroundColor:'red',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        

    },
    boton: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        
    }
});