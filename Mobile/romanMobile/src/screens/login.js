import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import { Background } from '@react-navigation/elements';

export default class Login extends Component 
{
    constructor(props)
    {
        super(props)

        this.state = {
            email : "",
            senha : ""
        }
    } 

    realizarLogin = async () => {
        console.warn(this.state.email + '' + this.state.senha)

        const resposta = await api.post('/Logins',
            {
                email: this.state.email,
                senha: this.state.senha
            }
        )

        const token = resposta.data.token;
        await AsyncStorage.setItem('userToken',token)

        if (resposta.status == 200) {
            this.props.navigation.navigate('Main');
        }
        console.warn(token)
        
    }

    render() {
        return (
            <ImageBackground style={StyleSheet.absoluteFillObject} source={require('../../Assets/img/FundoLogin.png')}> 
                <View style={styles.main}>
                    <Image source={require('../../Assets/img/Logo.png')} />
                    <Text style={styles.tituloPag}>Login</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#78736D"
                    keyboardType="email-address"
                    onChangeText={email => this.setState({email})}
                    />

                    <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#78736D"
                    keyboardType="default"
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({senha})}
                    />

                    <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={this.realizarLogin}>
                    <Text style={styles.btnLoginText}>Entrar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create(
    {
        overlay: {
            ...StyleSheet.absoluteFillObject, 
            backgroundColor: 'rgba(183,39,255,0.79)', 
        },

        main: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },

        tituloPag: {
            color: 'white',
            fontSize: 50,
            marginTop: 10,
            marginBottom: 60
        },

        input: {
            backgroundColor: 'white',
            width: '70%',
            borderRadius: 20,
            paddingLeft: 15,
            marginTop: 40
        },

        btnLogin: {
            backgroundColor: '#DB3D58',
            backfaceVisibility: 'visible',
            borderRadius: 20,
            height: 50,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70
        },

        btnLoginText: {
            fontSize: 25,
            color: "white"
            
            
        }
        


    }
)