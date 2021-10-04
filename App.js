import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import EntradaDeDados from './components/EntradaDeDados';
import ExibeItens from './components/ExibeItens';
import ExibeItem from './components/ExibeItem';

export default function App() {

  const [itens, setItens] = useState([]);
  const [contadorItens, setContadorItens] = useState(0);

  const adicionarItem = (descricao, fabricante) => {
    console.log(JSON.stringify(descricao));
    console.log(JSON.stringify(fabricante));
    setItens(itens => {
      setContadorItens(contadorItens + 1);
      return [{ key: contadorItens.toString(), value: {descricao, fabricante}}, ...itens];
    })
  }

  const apagarItens = () => {
    setItens([]);
  }

  const removerItem = (keyASerRemovida) => {
    setItens(itens => {
      return itens.filter((iten) => {
        return item.key !== keyASerRemovida
      })
    })
  }

  return (
    <View style={styles.telaPrincipalView}>
      <EntradaDeDados onAdicionarItem={adicionarItem} onApagarTudo={apagarItens} />
      <View>
        
        <ScrollView>
        {
          itens.map(item =>
            <View
              key={item.key}
              style={styles.itemNaLista}>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>
              <ExibeItens>{item}</ExibeItens>
              </Text>
            </View>
          )
        }

        </ScrollView>
        
      </View>
  
      {/* <FlatList>
        data={vacinas}
        renderItem={
            vacina => (
              <VacinaItem>
                loteVacina={vacina.}
              </VacinaItem>
              <
            )
        }
      </FlatList> */}
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center'
  },
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  }
});
