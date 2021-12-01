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
            // const Token = await AsyncStorage.getItem('userToken');

            const resposta = await api.get('/Temas', {
                headers: {
                    Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdWxvQGVtYWlsLmNvbSIsImp0aSI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwicm9sZSI6IjIiLCJleHAiOjE2MzgzODczNzYsImlzcyI6IlNlbmFpX1JvbWFuLndlYkFQSSIsImF1ZCI6IlNlbmFpX1JvbWFuLndlYkFQSSJ9.pGHq68HH5AWYZAZ3SP0h37alSKeFMccI4n21Q5-qqBo"
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
            <View>
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
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                <bottomTab.Navigator
                    initialRouteName='Home'

                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            if (route.name === 'Home') {
                                return (
                                    <Image
                                        source={require('../../Assets/IconsNavigation/home.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }
                            if (route.name === 'Escopos') {
                                return (
                                    <Image
                                        source={require('../../Assets/IconsNavigation/escopos.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }
                        },

                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarActiveBackgroundColor: '#EDB205',
                        tabBarInactiveBackgroundColor: '#EDB205',
                        tabBarActiveTintColor: 'red',
                        tabBarInactiveTintColor: '#FFFFFF',
                    })}
                >
                    <bottomTab.Screen name="Home" component={Home} />
                    <bottomTab.Screen name="Escopos" component={Escopos} />

                </bottomTab.Navigator>

            </View>
        );
    }

    // renderItem = ({ item }) => (
    //     // <Text style={{ fontSize: 20, color: 'red' }}>{item.nomeEvento}</Text>

    //     <View style={styles.flatItemRow}>

    //         <Text style={styles.flatItemTitle}>{item.tituloTema}</Text>

    //     </View>
    // );

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
    },

    dados: {
        backgroundColor: '#0F0',
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
        backgroundColor: '#F00',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },


})