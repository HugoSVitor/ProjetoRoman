import React, { Component } from "react";
import { Picker } from '@react-native-picker/picker';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

//import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descricao: '',
            listaTemas: [],
        };
    }

    buscarEventos = async () => {
        const resposta = await api.get('/Temas');
        // console.warn(resposta);
        const dadosDaApi = resposta.data;
        this.setState({ listaTemas: dadosDaApi });
    };

    componentDidMount() {
        this.buscarEventos();
    }

    render() {
        return (
            <View>
                <View style={styles.box}>
                    <View style={styles.dados}>
                        <Text>Título</Text>
                        <TextInput style={styles.inserir} onValueChange={this.state.titulo} />
                    </View>
                    <View style={styles.dados}>
                        <Text>Descrição</Text>
                        <TextInput style={styles.inserir} onValueChange={this.state.descricao} />
                    </View>
                    <View style={styles.dados}>
                        <Text>Tema</Text>
                        <FlatList
                            contentContainerStyle={styles.mainBodyContent}
                            data={this.state.listaTemas}
                            keyExtractor={item => item.idTema}
                            renderItem={this.renderItem}
                        />


                        {/* <Picker

                            style={{ height: 50, width: 150 }}

                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>






                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                            {
                                this.state.listaTemas.map((escopo) => {
                                    return <Picker.Item value={escopo.tituloTema} label='Título' key={escopo.idTema} />
                                })
                            }
                        </Picker> */}

                    </View>
                    <TouchableOpacity style={styles.btnCadastar}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderItem = ({ item }) => (
        // <Text style={{ fontSize: 20, color: 'red' }}>{item.nomeEvento}</Text>

        <View style={styles.flatItemRow}>

            <Text style={styles.flatItemTitle}>{item.tituloTema}</Text>

        </View>
    );

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
    mainBodyContent: {
        // paddingTop: 30,
        // paddingRight: 50,
        // paddingLeft: 50,
    },
    // dados do evento de cada item da lista (ou seja, cada linha da lista)
    flatItemRow: {
        // flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        // marginTop: 40,
    },

    flatItemTitle: {
        fontSize: 16,
        color: '#333',
    },

})