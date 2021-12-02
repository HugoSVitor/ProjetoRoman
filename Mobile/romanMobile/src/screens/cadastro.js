import React, { Component } from "react";
import { Picker } from '@react-native-picker/picker';
// import RNPickerSelect from 'react-native-picker-select';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descricao: '',
            idTema: 0,
            listaTemas: [],
        };
    }

    buscarTemas = async () => {
        try {
            const Token = await AsyncStorage.getItem('userToken');

            const resposta = await api.get('/Temas', {
                headers: {
                    Authorization: 'Bearer ' + Token
                },
            });
            console.warn(resposta);
            const dadosDaApi = await resposta.data;
            this.setState({ listaTemas: dadosDaApi });

        } catch (error) {
            console.warn(error)
        }



    };

    Cadastrar = async () => {
        try {
            const resposta = await api.post('/Sugestaos', {
                "idTema": this.state.idTema,
                "tituloSugestao": this.state.titulo,
                "descricao": this.state.descricao
            }, {
                headers: {
                    Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdWxvQGVtYWlsLmNvbSIsImp0aSI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwicm9sZSI6IjIiLCJleHAiOjE2MzgzODg3NzgsImlzcyI6IlNlbmFpX1JvbWFuLndlYkFQSSIsImF1ZCI6IlNlbmFpX1JvbWFuLndlYkFQSSJ9.6ja63DhYb55rmG34X5wzSVVYdm-XQB4GvduUBcFRjmY"
                },
            });
            console.warn(resposta);
        } catch (error) {
            console.warn(error)
        }
    }

    componentDidMount() {
        this.buscarTemas();
    }

    encontrarTemas = () => {
        return (
            this.state.listaTemas.map((tema) => {
                return { key: tema.idTema, label: { tituloTema }, value: tema.idTema }
            })
        )
    }

    render() {
        return (
            
                <View style={styles.container_geral}>
                    <View>
                        <Text style={styles.titulo_pg}>Cadastrar Escopo</Text>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.dados}>
                            <Text>Título</Text>
                            <TextInput style={styles.inserir} onChangeText={titulo => this.setState({ titulo })} />
                        </View>
                        <View style={styles.dados}>
                            <Text>Descrição</Text>
                            <TextInput style={styles.inserir} onChangeText={descricao => this.setState({ descricao })} />
                        </View>
                        <View style={styles.dados}>
                            <Text>Tema</Text>
                            <Picker
                                selectedValue={this.state.idTema}
                                onValueChange={(itemValue) => this.setState({ idTema: itemValue })}
                                style={styles.inserir}
                            >
                                <Picker.Item value={0} label={'Selecione um valor'} key={0} />
                                {
                                    this.state.listaTemas.map((escopo) => {
                                        return <Picker.Item value={escopo.idTema} label={escopo.tituloTema} key={escopo.idTema} />
                                    })
                                }
                            </Picker>
                        </View>
                        <TouchableOpacity style={styles.btnCadastar} onPress={this.Cadastrar}>
                            <Text style={styles.textoBtnCadastar}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            
        );
    }


}

const styles = StyleSheet.create({
    // conteúdo da main
    box: {
        //flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 400,
        width: '100%',
        marginBottom: 150,
    },

    dados: {
        // backgroundColor: '#0F0',
        width: 232,
        height: 60,
    },

    inserir: {
        borderStyle: "solid",
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 16,
        width: '100%',
        height: 32,
    },

    btnCadastar: {
        width: 194,
        height: 47,
        backfaceVisibility: "visible",
        backgroundColor: '#DB3D58',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },

    textoBtnCadastar: {
        fontSize: 22,
        color: '#FFF',
    },

    titulo_pg: {
        fontSize: 30,
        color: '#4D0E02',
        marginTop: 20,
        width: 350,
    },

    container_geral: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    }


})