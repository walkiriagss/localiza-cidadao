import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from "react-native-gesture-handler";


export default function Project({navigation}) {

  return (
        <View style={styles.serviceHeader}>
            <ScrollView >
                <View style={styles.margin}>
                    <View style={styles.userInfo}>
                        <View>
                            <Text style={styles.author}>Sobre Nós</Text>
                            <Text>O aplicativo localiza cidadão tem o intuito de mapear todos os serviços oferecidos a pessoas em situação de rua na cidade de Juiz de Fora.</Text>
                            <Text>A cidade de Juiz de Fora MG, apresenta um número significativo de moradores em
situação de rua, muitas instituições percebendo essa situação, tem prestado diversos
serviços para esse grupo.</Text>
<Text>
A fim de melhorar os serviços prestados por essas instituições, está sendo
desenvolvido um monitoramento dos locais onde os moradores em situação de rua se
encontram, para distribuir melhor esses serviços e atender a maior parte possível dessa
população.</Text>
                        </View> 
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

