import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var radio_props = [
    {label: '1', value: 0 },
    {label: '2', value: 1 },
    {label: '3', value: 1 },
    {label: '4', value: 1 },
    {label: '5', value: 1 },
  ];

export default function Comments() {

  return (
    
    

        <View style={styles.serviceHeader}>
            <ScrollView >
                <View style={styles.margin}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Rodrigo Elias</Text>
                        <Text style={styles.place}>Lugar muito bom, almoço todos os dias lá</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Rodrigo Elias</Text>
                        <Text style={styles.place}>Lugar muito bom, almoço todos os dias lá</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Mateus Ávila</Text>
                        <Text style={styles.place}>Faço comtribuições frequentes pra lá. Lugar sempre precisa de doações</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Rodrigo Elias</Text>
                        <Text style={styles.place}>Lugar muito bom, almoço todos os dias lá</Text>
                    </View>

                </View>
            </ScrollView>

            <View style={styles.avaliar}>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Comentar</Text>
                  <TextInput
                  placeholder={'Escreva aqui seu comentário'}
                  style={styles.input}
                 
                />
                </View>
                <View style={styles.a}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Avaliar</Text>
                        <RadioForm
                            radio_props={radio_props}
                            formHorizontal={true}
                            labelHorizontal={false}
                            disabled={true}
                        />
                    </View>
                        <Icon name="send" size={40} color="#0089a5" />
                    
                </View>
            </View>

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

        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 15,
        color: '#666'
    },
    userInfo: {
        marginTop: 30
    },
    avaliar:{
        position: 'absolute',
        bottom:0,
        width: '110%',
        elevation: 3,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    margin: {
        paddingBottom:30,

    },
    a: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }


});
