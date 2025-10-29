import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image
} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const formValido = email && senha;

  const handleEntrar = () => {
    alert(`Entrou com:\nEmail: ${email}\nSenha: ${senha}`);
  };

  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <View style={styles.top}>
        <Image
          source={require('../../assets/images/CORA_LOGO2.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Conteúdo centralizado */}
      <View style={styles.content}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Text style={styles.esqueci}>Esqueci a senha</Text>

        <TouchableOpacity
          style={[styles.button, !formValido && styles.buttonDisabled]}
          onPress={handleEntrar}
          disabled={!formValido}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  top: {
    alignItems: 'center',
    marginTop: 40, // distância do topo da tela
  },
  logo: {
    width: 120,
    height: 120,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#E91E63',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  esqueci: {
    alignSelf: 'flex-end',
    marginBottom: 30,
    color: '#E91E63',
  },
  button: {
    backgroundColor: '#E91E63',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#F8BBD0',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
