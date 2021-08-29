import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from "react-native-gesture-handler";


export default function Users({navigation}) {

  return (
        <View style={styles.serviceHeader}>
            <ScrollView >
                <TouchableOpacity style={styles.footer1} onPress={() => {navigation.navigate('Novo Usuário')}}>
                    <Text style={styles.footerText}> Novo </Text>

                    <RectButton style={styles.searchUserButton} onPress={() => {navigation.navigate('Novo Usuário')}} >
                        <Icon name="add" size={60} color="#0089a5" />
                    </RectButton>
                </TouchableOpacity>
                <View style={styles.margin}>
                    <View style={styles.userInfo}>
                        <View>
                            <Text style={styles.author}>Rodrigo Oliveira Elias</Text>
                            <Text>Pesquisador</Text>
                        </View>
                        <RectButton style={styles.searchUserButtonVisibility} onPress={() => {navigation.navigate('Usuário')}}>
                            <Text style={{color:'white'}}>Ver</Text>
                            <Icon name="visibility" size={40} color="white" />
                        </RectButton>
                    </View>
                    <View style={styles.userInfo}>
                        <View>
                            <Text style={styles.author}>Matheus Avila</Text>
                            <Text>Usuário Comum</Text>
                        </View>
                        <RectButton style={styles.searchUserButtonVisibility} onPress={() => {navigation.navigate('Usuário')}} >
                            <Text style={{color:'white'}}>Ver</Text>
                            <Icon name="visibility" size={40} color="white" />
                        </RectButton>
                    </View>
                    <View style={styles.userInfo}>
                        <View>
                            <Text style={styles.author}>Walkíria Garcia</Text>
                            <Text>Pesquisador</Text>
                        </View>
                        <RectButton style={styles.searchUserButtonVisibility} onPress={() => {navigation.navigate('Usuário')}}>
                            <Text style={{color:'white'}}>Ver</Text>
                            <Icon name="visibility" size={40} color="white" />
                        </RectButton>
                    </View>

                </View>
            </ScrollView>

        </View>


  );
}

const styles = StyleSheet.create({
    serviceHeader: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flex: 1
    },
    author: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 15,
        color: '#666'
    },
    userInfo: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    searchUserButtonVisibility: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '40%',
        height: 50,
        backgroundColor: "#0089a5",
        borderRadius: 100,
        alignItems: "center",
        marginTop:15,
        elevation: 3,
      },
      footer1: {
        width: 150,
        left: 200,
        top:10,
        backgroundColor: "#fff",
        borderRadius: 30,
        height: 56,
        paddingLeft: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3,
      },

});

