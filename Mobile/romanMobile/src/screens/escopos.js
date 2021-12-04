import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Escopos extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            listaEscopos: []
        };
      }

    buscarEscopos = async () => {

        const token = await AsyncStorage.getItem('userToken');


        const resposta = await api.get('/Sugestaos', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
          })
                

        if(resposta.status === 200){

           
            const dadosAPI = resposta.data;
            this.setState({ listaEscopos: dadosAPI })


        }


    }

    componentDidMount() {this.buscarEscopos()}

    render()
    {
        return(
            <View style={styles.main}>
                <View style={styles.mainHeader}>
                        <Text style={styles.titulo}>Escopos</Text>
                    
                    
                    {/*<View style={styles.mainHeaderLine}></View>*/}
                </View>

                

                <View style={styles.mainBody}>
                <FlatList
                    contentContainerStyle={styles.mainBodyContent}
                    data={this.state.listaEscopos}
                    keyExtractor={item => item.idSugestao}
                    renderItem={this.renderItem}
                />
                </View>
            </View>
        )
    }

    renderItem = ({item}) => (
        <View style={styles.flatListQuadrado}>

                <View style={styles.flatListTitulos}>
                    <Text style={styles.flatListTitulo}>{item.tituloSugestao}</Text>
                    <Text style={styles.flatListNome}>{item.idUsuarioNavigation.nome}</Text>
                </View>
                
                <View style={styles.flatListQuadradoTemaDescricao}>
                    <Text style={styles.flatListTemaDescricao}>Tema:</Text>
                    <Text style={styles.flatListTemaDescricao2}>{item.idTemaNavigation.tituloTema}</Text>
                </View>
                <View style={styles.flatListQuadradoTemaDescricao}>
                    <Text style={styles.flatListTemaDescricao}>Descrição:</Text>
                    <Text style={styles.flatListTemaDescricao2}>{item.descricao}</Text>
                </View>
                
                
        </View>

    )

}

const styles = StyleSheet.create(
    {

        main: {
            backgroundColor: '#ffff',
            flex: 1,
            alignItems: 'center'
            
        },

        mainHeader: {
            flex: 1,
            width: 325 ,
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            alignItems: 'flex-start',
            marginBottom: 30
        },
        titulo: {
            fontSize: 35,
            color: 'black',
            marginBottom: 10,
            color: '#4D0E02',
        } ,


        mainBody: {
            flex: 7
        },

        mainBodyContent: {
            alignItems: 'center'
        },

        flatListQuadrado: {
            width: 325,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 20,
            marginBottom: 30,
            borderRadius: 20
        },

        flatListTitulos: {
            flexDirection: 'row'
        },

        flatListTitulo: {
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            marginRight: 15
        },

        flatListNome: {
            fontWeight: 'normal',
            fontSize: 17,
            color: 'gray',
            marginTop: 3,
            marginBottom: 10
        },

        flatListTemaDescricao: {
            fontSize: 19,
            fontWeight: '500',
            color: 'black',
            marginRight: 5
        },

        flatListTemaDescricao2: {
            fontSize: 18,
            fontWeight: '300',
            marginTop: 2,
            color: 'black'
        },

        flatListQuadradoTemaDescricao: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10
        }
    }
)