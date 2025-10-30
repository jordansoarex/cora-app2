import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import perguntas from '../../components/perguntas';


export default function App() {
  
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [finalizado, setFinalizado] = useState(false);

  const handleResposta = (resposta) => {
    const novasRespostas = [...respostas, resposta];
    setRespostas(novasRespostas);

    if (indiceAtual + 1 < perguntas.length) {
      setIndiceAtual(indiceAtual + 1);
    } else {
      setFinalizado(true);
    }
  };

  const calcularPontuacao = () => {
    return respostas.reduce((total, resposta, index) => {
      if (resposta === 'sim') {
        return total + perguntas[index].peso;
      }
      return total;
    }, 0);
  };

  
  const gerarMensagemFinal = () => {
    const pontuacao = calcularPontuacao();

    if (pontuacao >= 7) {
      return "VOCÊ CORRE PERIGO IMEDIATO";
    } else if (pontuacao >= 4) {
      return "Procure ajuda em nossos centros de atendimento";
    } else {
      return "Fique em alerta";
    }
  };

  return (
    <View style={styles.container}>
 components     {!finalizado ? (
        <>
          <Text style={styles.pergunta}>
            {perguntas[indiceAtual].texto}
          </Text>
          <View style={styles.botoes}>
            <Button title="Sim" onPress={() => handleResposta('sim')} />
            <Button title="Não" onPress={() => handleResposta('nao')} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.resultado}>Resultados:</Text>

          {perguntas.map((pergunta, index) => (
            <Text key={index} style={styles.resposta}>
              {pergunta.texto} → {(respostas[index] || '').toUpperCase()}
            </Text>
          ))}

          <Text style={styles.pontuacao}>
            Pontuação final: {calcularPontuacao()}
          </Text>

          <Text style={styles.mensagem}>
            {gerarMensagemFinal()}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  pergunta: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  resposta: {
    fontSize: 18,
    marginBottom: 6,
  },
  pontuacao: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  mensagem: {
    marginTop: 12,
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  }
});
