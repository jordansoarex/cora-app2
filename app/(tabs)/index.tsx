import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const perguntas = [
    { texto: "Seu parceiro ou ex-parceiro já impediu você de trabalhar ou de ter acesso ao seu próprio dinheiro?", peso: 2 },
    { texto: "Ele já destruiu, escondeu, vendeu ou se apropriou dos seus bens, documentos ou dinheiro sem sua permissão?", peso: 2 },
    { texto: "Você já sentiu que ele controla ou decide como você deve gastar seu dinheiro ou recursos financeiros?", peso: 1 },
    { texto: "Ele já deixou de contribuir financeiramente com a casa ou com os filhos, mesmo tendo condições para isso?", peso: 1 },
    { texto: "Alguma vez ele fez você assinar documentos ou contratos contra sua vontade?", peso: 2 }
  ];

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
      {!finalizado ? (
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
