import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Cadastro from "../screens/cadastro"

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const bottomTab = createBottomTabNavigator();

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    Logout = async () => {
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.Main}>
                <ImageBackground style={styles.Banner} source={require('../../Assets/ImgBannerHome.png')}>
                    <Text style={styles.TextoBanner}>
                        Busque e crie
                        escopos junto
                        de profissionais
                        parceiros
                    </Text>
                    <TouchableOpacity onPress={this.Logout}>
                        <Image source={require('../../Assets/IconsNavigation/logout.png')} />
                    </TouchableOpacity>
                </ImageBackground >
                <View style={styles.Section}>
                    <Text style={styles.SectionTexto}>
                        Veja as sugestões de escopos de projetos criados por outros professores
                    </Text>
                    <TouchableOpacity>
                        <Image source={require('../../Assets/IconsNavigation/escopos.png')} style={styles.SectionImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Section}>
                    <Text style={styles.SectionTexto}>
                        Crie os seus escopos de projetos públicos
                    </Text>
                    <TouchableOpacity onPress={this.props.navigation.navigate('Cadastrar_Escopo')}>
                        <Image source={require('../../Assets/IconsNavigation/cadastro.png')} style={styles.SectionImg} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    TextoBanner: {
        width: '60%',
        color: '#FFF',
        fontSize: 30,
    },
    Banner: {
        width: '100%',
        height: 232,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 35
    },
    Section: {
        marginTop: 35,
        width: 300,
        height: 125,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        borderColor: '#E4E3E2',
        borderWidth: 2,
        padding: 25,
    },
    SectionTexto: {
        fontSize: 18,
        color: "#000",
        width: 190
    },
    SectionImg: {
        tintColor: "#DB3D58",
    }
});

// const Home = () => {
//     return (
//         <ScrollView>
//             <Text style={styles.texto}>
//                 teste ebaaa
//             </Text>
//         </ScrollView>
//     );
// };

// export default Home;