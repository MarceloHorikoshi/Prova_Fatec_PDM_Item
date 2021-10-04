import React, { useState, setState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const EntradaDeDados = (props) => {

    const [fabricante, setFabricante] = useState('');
    const [descricao, setDescricao] = useState('');

    return (
        <View style={estilos.entradaDeDadosView}>
            <h2>Descrição do Item: </h2>
            <TextInput
                placeholder="ex. Item feito a base de soja"
                style={estilos.entradaDeDadosTextInput}
                onChangeText={(i) => setDescricao(i)}
                value={descricao}
            />
            <h2>Fabricante do Item: </h2>
            <TextInput
                placeholder="ex. Adidas"
                style={estilos.entradaDeDadosTextInput}
                onChangeText={(i) => setFabricante(i)}
                value={fabricante}
            />
            <View
                style={estilos.botao}>
                <Button
                    title="Adicionar item"
                    onPress={() => {
                        //console.log(fabricante, descricao)
                        props.onAdicionarItem(descricao, fabricante)
                    }}
                />
            </View>
            <View
                style={estilos.botao}>
                <Button
                    title="Apagar tudo"
                    onPress={() => { props.onApagarTudo() }} />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    entradaDeDadosTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
    },
    entradaDeDadosView: {
        marginBottom: 8,
        alignItems: 'center'

    },
    botao: {
        width: '80%',
        marginTop: 8
    }
});

export default EntradaDeDados;