import React, { Component } from "react";

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nome: '',
          email: '',
        };
      }

    render() {
        return (
            <View style={styles.main}>
                
                    <Text>Teste</Text>
                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    // conteúdo da main
    main: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'center'
    }
})