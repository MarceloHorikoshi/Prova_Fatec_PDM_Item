import React, { useState, setState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ExibeItem = (props) => {
    
    return (
        <View>
            <Text>{JSON.stringify(props.chave)}</Text>
            <Text>{JSON.stringify(props.item.descricao)}</Text>
            <Text>{JSON.stringify(props.item.fabricante)}</Text>
        </View>
    );

}


export default ExibeItem;