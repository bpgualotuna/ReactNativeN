import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert, editable, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';


let productos = [
  { nombre: 'Dorito', categoria: 'Snacks', precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: 'Galleta', categoria: 'Snacks', precioCompra: 0.40, precioVenta: 0.55, id: 101 },
  { nombre: 'Queso', categoria: 'Hogar', precioCompra: 0.40, precioVenta: 0.85, id: 102 },
  { nombre: 'Pan', categoria: 'Hogar', precioCompra: 0.40, precioVenta: 0.15, id: 103 },
  { nombre: 'Cueritos', categoria: 'Snacks', precioCompra: 0.40, precioVenta: 0.35, id: 104 },
]

//EsNUevo indica si se esta creando un nuevo producto o se esta editando uno existente
let esNuevo = true;
// esta variable almacena el indice del producto seleccionado para editar
let indiceSeleccionado = -1;
//textos vacios


export default function App() {

  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [txtId, setTxtId] = useState();
  const [numElementos, setNumElementos] = useState(productos.length);



  let ItemProducto = ({ indice, item }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <TouchableOpacity onPress={() => {
        setTxtNombre(item.nombre);
        setTxtCategoria(item.categoria);
        setTxtPrecioCompra(item.precioCompra.toString());
        setTxtPrecioVenta(item.precioVenta.toString());
        setTxtId(item.id.toString());
        esNuevo = false;
        indiceSeleccionado = indice;
      }}>
        <View style={styles.itemPersona}>
          <View style={styles.itemIndice}>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.itemContenido}>
            <Text>
              {item.nombre}
            </Text>
            <Text>{item.categoria}</Text>
          </View>
          <View style={styles.itemBotones}>
            <Text>{item.precioVenta}</Text>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>¿Seguro quiere Eliminar el producto?</Text>
                  <Button
                    title='Aceptar'
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisible)
                      indiceSeleccionado = indice;
                      productos.splice(indiceSeleccionado, 1);
                      setNumElementos(productos.length);
                    }}>

                  </Button>
                  <Button
                    title='Cancelar'
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>

                  </Button>
                </View>
              </View>


            </Modal>
            <Button
              title=" X "
              color={'red'}
              onPress={() => {
                setModalVisible(true)

              }}
            />
          </View>

        </View>
      </TouchableOpacity>
    );
  }



  let limpiar = () => {
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    setTxtId(null);
    esNuevo = true;
  }

  let guardarProducto = () => {

    if (txtId == null || txtNombre == null || txtCategoria == null || txtPrecioCompra == null) {
      Alert.alert("INFO", "Debe completar todos los campos");
      return;
    } else {
      if (esNuevo) {
        if (existeProducto()) {
          Alert.alert("INFO", "Ya existe un producto con ese ID: " + txtId);
        } else {
          let producto = { nombre: txtNombre, categoria: txtCategoria, precioCompra: txtPrecioCompra, precioVenta: txtPrecioVenta, id: txtId };
          productos.push(producto);
          console.log(productos);
        }


      } else {
        productos[indiceSeleccionado].nombre = txtNombre;
        productos[indiceSeleccionado].categoria = txtCategoria;
        productos[indiceSeleccionado].precioCompra = parseFloat(txtPrecioCompra);
        productos[indiceSeleccionado].precioVenta = parseFloat(txtPrecioVenta);
      }
      limpiar();
      setNumElementos(productos.length);
    }
  }


  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == txtId) {
        return true;
      }
    }
    return false;
  }

  let calculo = (txt) => {
    setTxtPrecioCompra(txt);
    if (txt === '' || isNaN(txt)) {
      setTxtPrecioVenta('0');
      return;
    } else {
      let precioVenta = parseFloat(txt) * 1.2;
      setTxtPrecioVenta(precioVenta.toFixed(2));
    }

  }


  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.titulo}>Productos</Text>
        <TextInput
          style={[
            styles.txt,
            !editable && { backgroundColor: '#e0e0e0', color: '#888' } // gris de fondo y texto
          ]}
          value={txtId}
          placeholder='Ingrese el ID'
          onChangeText={setTxtId}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='NOMBRE'
          onChangeText={setTxtNombre}
          keyboardType='default'
        />
        <TextInput
          style={styles.txt}
          value={txtCategoria}
          placeholder='CATEGORIA'
          onChangeText={setTxtCategoria}

        />
        <TextInput
          style={styles.txt}
          value={txtPrecioCompra}
          placeholder='PRECIO DE COMPRA'
          onChangeText={calculo}
          keyboardType='numeric'
        />
        <TextInput
          style={[
            styles.txt,
            !editable && { backgroundColor: '#e0e0e0', color: '#888' } // gris de fondo y texto
          ]}
          value={txtPrecioVenta}
          placeholder='PRECIO DE VENTA'
          onChangeText={setTxtPrecioVenta}
          editable={false}

        />

        <View style={styles.areaBotones}>
          <Button
            title="Guardar"
            onPress={() => {
              guardarProducto();
            }}
          />
          <Button
            title="Nuevo"
            onPress={() => {
              limpiar();
            }}
          />
          <Text>Elementos:{numElementos}</Text>
        </View>

      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={productos}
          renderItem={({ index, item }) => {
            return <ItemProducto indice={index} item={item} />

          }}
          keyExtractor={item =>
            item.id
          }
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor: Brayan Gualotuña</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  lista: {
    flex: 1,
    //backgroundColor: 'lightpink',

  },
  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  textoPrincipal: {
    fontSize: 20
  },
  textoSecundario: {
    fontStyle: "italic",
    fontSize: 16
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
  },
  areaCabecera: {
    flex: 6,
    //backgroundColor: 'chocolate',
  },
  areaContenido: {
    flex: 10,
    //backgroundColor: 'coral',
  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemIndice: {
    //backgroundColor:'darkgray',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContenido: {
    paddingLeft: 5,
    //backgroundColor:'darkorange',
    flex: 5
  },
  itemBotones: {
    //backgroundColor: 'darkseagreen',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  txt: {
    borderWidth: 1,
    borderColor: 'black',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5,

  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',



  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }

});
