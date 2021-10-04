import React, { useState, setState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import EntradaDeDados from './EntradaDeDados';
import ExibeItem from './ExibeItem';

export default class ExibeItens extends React.Component {
    
    render() {
        const itens = JSON.stringify(this.props.children.value);
        console.log(itens);
         return (
            <FlatList
                data={itens}
                renderItem={
                item => (
                    <ExibeItem 
                    chave={this.props.children.key}
                    item={this.props.children.value}
                    />
                )
                }
             />
         );
    }

}