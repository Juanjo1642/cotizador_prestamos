import React from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
// Para conseguir los colores anteriores, debemos de hacer una importación.
// import nombre_para_referenciar_importacion from "ruta"
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
// Anular los warning

export default function App() {

  // El SafeAreaView lo que hace es: no coger el espacio de arriba y de abajo
  // ya que si no lo ponemos entraría en el noutch
  // Lo tenemos que englobar todo en unn fragment <> </> para que se pueda retornar
  // Tambien se le puede cambiar el color del simbolo de la bateria, wifi...
  // Se tendria que importar el StatusBar
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form />
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}
// Para dar estilos hay que ponerse por fuera del componente y ponemos:

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center"
  },
  titleApp: {
    fontSize: 25,
    fontWeight:"bold",
    color: "#fff",
    marginTop: 15
  }


});