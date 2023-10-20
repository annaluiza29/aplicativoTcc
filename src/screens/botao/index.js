import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import api from '../../services/api';

const BotaoSwitch = () => {
  const [valor, setValor] = useState(false);

  const toggleSwitch = () => {
    const novoValor = !valor;
    setValor(novoValor);
    
    // Chame a função NewValue para enviar o novo valor para o caminho desejado.
    NewValue(novoValor);
  };

  // Função para enviar o novo valor para o servidor
  const NewValue = async (novoValor) => {
    try {
      const obj = { valor: novoValor ? 1 : 0 };
      console.log(obj);
      console.log(valor);
      const res = await api.post('pam3etim/bd/usuarios/botao.php', obj);
      // Lida com a resposta da API, se necessário
      console.log('Resposta da API:', res.data);
    } catch (error) {
      // Lida com erros da API, se ocorrerem
      console.error('Erro ao enviar valor para a API:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.Text}>Alimentador: {valor ? 'Ligado' : 'Desligado'}</Text>
        <Switch
          value={valor}
          onValueChange={toggleSwitch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text:{
    fontSize: 16
  },
});

export default BotaoSwitch;
