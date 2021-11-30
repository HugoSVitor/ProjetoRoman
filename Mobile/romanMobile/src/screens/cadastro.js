import React, { Component } from "react";
import { Picker } from '@react-native-picker/picker';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descricao: '',
            listaTemas: [],
        };
    }

    render() {
        return (
            <View>
                <View style={styles.box}>
                    <View style={styles.dados}>
                        <Text>Título</Text>
                        <TextInput style={styles.inserir} onValueChange={this.setState(titulo)} />
                    </View>
                    <View style={styles.dados}>
                        <Text>Descrição</Text>
                        <TextInput style={styles.inserir} onValueChange={this.setState(descricao)} />
                    </View>
                    <View style={styles.dados}>
                        <Text>Tema</Text>
                        <Picker

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
                        </Picker>


                    </View>
                    <TouchableOpacity style={styles.btnCadastar}>
                        <Text>Cadastrar</Text>
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
    }

})