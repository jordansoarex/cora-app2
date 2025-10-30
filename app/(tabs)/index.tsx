import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/images/CORA_LOGO2.jpeg')} 
          style={styles.logo}
          resizeMode="contain" // Mantem a ratio da imagem dentro da view
        />
      </View>

      <View style={styles.textoContainer}>
        <Text style={styles.paragrafo}>
          Bem-vinda {'\n\n'}

          CORA é mais do que um nome, é um convite. Aqui, CORA significa coragem para enfrentar desafios, coração para acolher suas dores e cura para reconstruir sua história.{'\n\n'}

          CORA com você, CORA por você. Juntas, mais fortes.{'\n\n'}

          IMPORTANTE{'\n'}
          A qualquer momento toque na imagem do aplicativo para proteger sua privacidade
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Primeiro acesso')}
          >
            <Text style={styles.buttonText}>Primeiro acesso</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
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

 
  button: {
    backgroundColor: '#E91E63', 
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
