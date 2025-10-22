import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking 
} from 'react-native';
import Checkbox from 'expo-checkbox'; 

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);
 
  const handleEntrar = () => {
    if (!termosAceitos) {
      alert('Você precisa aceitar os termos de uso');
      return;
    }
    // tratar o envio do cadastro dps
    alert(`Cadastro enviado para:\n${nome}, ${cpf}, ${email}`);
    
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/CORA_LOGO2.jpeg')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.form}>
        <TextInput
          placeholder="Nome completo"
          style={styles.input}
          value={nome}
          onChangeText={setNome} 
        />
        <TextInput
          placeholder="CPF" //CRIAR ALGUMA FORMA DE VERIFICAR CPF VÁLIDO
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
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

        <View style={styles.checkboxContainer}> 
          <Checkbox //mudança de estado para os termos
            value={termosAceitos}
            onValueChange={setTermosAceitos}
            color={termosAceitos ? '#E91E63' : undefined} //ternário muda a cor se termos !nao
          />
          <Text style={styles.checkboxText}>
            Li e concordo com os{' '}
            <Text 
              style={styles.link}
              onPress={() => Linking.openURL('www.google.com')} //criar o link pros termos !!!!!!!!!!!!
            >
              termos de uso
            </Text>
          </Text>
        </View>
 
        <TouchableOpacity 
          style={[styles.button, !termosAceitos && styles.buttonDisabled]} 
          onPress={handleEntrar}
          disabled={!termosAceitos}
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
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginVertical: 20,
  },
  form: {
    flex: 1,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#E91E63',
    textDecorationLine: 'underline',
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
