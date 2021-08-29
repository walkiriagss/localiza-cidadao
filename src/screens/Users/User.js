import React from 'react';
import {View, Text,SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from "react-native-gesture-handler";



export default function User() {
        return (
            <View style={styles.container}>
                <ScrollView >
                        <View style={styles.infos}>
                            <Text style={styles.info}><Text style={styles.cab}>Nome:</Text > Rodrigo Elias</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Tipo:</Text > Pesquisador</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > rodrigo@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Data de Nascimento:</Text > 30/05/1993</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Sexo:</Text >Masculino</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Escolaridade</Text >Ensino Superior Cursando</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Instituíção</Text >UFJF</Text>
                        </View>
                        <View style={styles.userInfo}>
                            <RectButton style={styles.searchUserButtonClear} >
                                <Text style={{color:'white'}}>Excluir</Text>
                                <Icon name="clear" size={40} color="white" />
                            </RectButton>
                            <TouchableOpacity>
                            <RectButton style={styles.searchUserButtonSave} >
                                <Text style={{color:'white'}}>Editar</Text>
                                <Icon name="save" size={40} color="white" />
                            </RectButton>
                            </TouchableOpacity>    
                        </View>
                </ScrollView>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    infos: {
        paddingHorizontal: 20,
    },
    author: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginTop:20
    },
    cab: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    info: {
        fontSize: 15,
        color: '#000',
        marginTop: 10,
    },
    place: {
        fontSize: 15,
        color: '#666',
        marginBottom:-15
    },
      searchUserButtonClear: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '100%',
        height: 50,
        backgroundColor: "red",
        borderRadius: 100,
        alignItems: "center",
        marginTop:15,
        elevation: 3,
      },
      searchUserButtonSave: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '100%',
        height: 50,
        backgroundColor: "blue",
        borderRadius: 100,
        alignItems: "center",
        marginTop:15,
        marginBottom:20,
        elevation: 3,
      },

});
