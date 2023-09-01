import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: false,
    };
  }


  

  Botao = () => {
    this.setState({ isSwitchOn: !this.state.isSwitchOn });

    async function saveData() {

        try {
            const obj = {
                valor: valor

            }
       

            
             const res = await api.post('pam3etim/bd/usuarios/botao.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Salvar",
                    description: res.data.mensagem,
                    type: "warning",
                    duration: 3000,
                });

                return;
            }

            setSucess(true);
            showMessage({
                message: "Salvo com Sucesso",
                description: "Registro Salvo",
                type: "success",
                duration: 800,
            });
            navigation.push("Home")

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente." );
            setSucess(false);
        }
    }
  };

  render() {
    return (
      <View>
        <Text>{this.state.isSwitchOn ? 'Ativado' : 'Desativado'}</Text>
        <Switch
          value={this.state.isSwitchOn}
          onValueChange={this.Botao}
          onPress={() => {
            setSucess(true);
            saveData();
            setSucess(false);
        }}
        />
      </View>
    );
  }
}

export default Botao;
