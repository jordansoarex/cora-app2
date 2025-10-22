import React from 'react';
import 
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.logoContainer}>
        <Image 
          source={require('..assets/images/react-logo.png')} 
          style={styles.logo}
          resizeMode="contain" //Mantem a ratio da imagem dentro da view
        />
      </View>

     
      <View style={styles.textoContainer}>
        <Text style={styles.paragrafo}>
          Bem-vindo ao CORA! Por favor, faça seu cadastro ou login para continuar.
        </Text>
      </View>

    
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Primeiro acesso" onPress={() => alert('Primeiro acesso')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Login" onPress={() => alert('Login')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,           
    padding: 20,
    justifyContent: 'space-between',  
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  paragrafo: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  buttonWrapper: {
    marginVertical: 8,
  },
});
