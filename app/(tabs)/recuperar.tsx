import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
     
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/images/CORA_LOGO2.jpeg')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

    
      <View style={styles.centerContainer}>
        <Text style={styles.recuperarText}>RECUPERAR ACESSO</Text>

        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Recuperar acesso')}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 120,
    height: 120,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  recuperarText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#E91E63',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    marginBottom: 40,
  },
  button: {
       backgroundColor: '#E91E63',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
