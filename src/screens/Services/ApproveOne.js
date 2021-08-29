import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AproveOne({navigation}) {
    const [text, onChangeText] = React.useState("Sopão dos Pobres");
    const [textEmail, onChangeTextEmail] = React.useState("sopao@email.com");
  return (
        <ScrollView style={styles.serviceHeader}>
            <View >
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Mapa</Text>
                    <RectButton style={styles.searchUserButton} >
                        <Text style={{color:'white'}}>Ver a Localização no Mapa    </Text>
                        <Icon name="map" size={40} color="white" />
                    </RectButton>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Nome *</Text>
                  <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    style={styles.input}
                    />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>E-mail *</Text>
                  <TextInput
                   onChangeText={onChangeTextEmail}
                   value={textEmail}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.authorSelect}>Tipo*</Text>
                  <Picker>
                    <Picker.Item label="Alimentação" value="alimentacao" />
                    <Picker.Item label="Albergue" value="albergue" />
                    <Picker.Item label="Educação" value="educacao" />
                    <Picker.Item label="Saúde" value="Saúde" />
                    <Picker.Item label="Outro" value="Saúde" />
                  </Picker>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>CEP*</Text>
                  <TextInput
                  placeholder={'00.000-000'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Rua*</Text>
                  <TextInput
                  placeholder={'Escreva aqui a rua'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Número*</Text>
                  <TextInput
                  keyboardType="numeric"
                  placeholder={'Escreva aqui o número'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Bairro*</Text>
                  <TextInput
                  placeholder={'Escreva aqui o bairro'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Cidade*</Text>
                  <TextInput
                  placeholder={'Escreva aqui a cidade'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.authorSelect}>Estado*</Text>
                  <Picker>
                  <Picker.Item label="Acre" value="Acre" />
                  <Picker.Item label="Alagoas" value="Alagoas" />
                  <Picker.Item label="Amapá" value="Amapá" />
                  <Picker.Item label="Amazonas" value="Amazonas" />
                  <Picker.Item label="Bahia" value="Bahia" />
                  <Picker.Item label="Ceará" value="Ceará" />
                  <Picker.Item label="Distrito Federal" value="Distrito Federal" />
                  <Picker.Item label="Espírito Santo" value="Espírito Santo" />
                  <Picker.Item label="Goiás" value="Goiás" />
                  <Picker.Item label="Maranhão" value="Maranhão" />
                  <Picker.Item label="Mato Grosso" value="Mato Grosso" />
                  <Picker.Item label="Mato Grosso do Sul" value="Mato Grosso do Sul" />
                  <Picker.Item label="Minas Gerais" value="Minas Gerais" />
                  <Picker.Item label="Pará" value="Pará" />
                  <Picker.Item label="Paraíba" value="Paraíba" />
                  <Picker.Item label="Paraná" value="Paraná" />
                  <Picker.Item label="Pernambuco" value="Pernambuco" />
                  <Picker.Item label="Piauí" value="Piauí" />
                  <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
                  <Picker.Item label="Rio Grande do Norte" value="Rio Grande do Norte" />
                  <Picker.Item label="Rio Grande do Sul" value="Rio Grande do Sul" />
                  <Picker.Item label="Rondônia" value="Rondônia" />
                  <Picker.Item label="Roraima" value="Roraima" />
                  <Picker.Item label="Santa Catarina" value="Santa Catarina" />
                  <Picker.Item label="São Paulo" value="São Paulo" />
                  <Picker.Item label="Sergipe" value="Sergipe" />
                  <Picker.Item label="Tocantins" value="Tocantins" />

                </Picker>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Funcionamento*</Text>
                  <TextInput
                  placeholder={'Escreva aqui o endereço'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Qnt. média de atendimento*</Text>
                  <TextInput
                  placeholder={'Escreva aqui o endereço'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>URL Facebook</Text>
                  <TextInput
                  placeholder={'Escreva aqui a URL do facebook'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>URL Instagram</Text>
                  <TextInput
                  placeholder={'Escreva aqui a URL do instagram'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>URL Twiter</Text>
                  <TextInput
                  placeholder={'Escreva aqui a URL do Twiter'}
                  style={styles.input}
                />
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.author}>Imagem</Text>
                    <RectButton style={styles.searchUserButton} >
                        <Text style={{color:'white'}}>Selecionar a imagem do serviço</Text>
                        <Icon name="image" size={40} color="white" />
                    </RectButton>
           
                </View>
                <View style={styles.userInfo}>
                    <RectButton style={styles.searchUserButtonClear} >
                        <Text style={{color:'white'}}>Recusar</Text>
                        <Icon name="clear" size={40} color="white" />
                    </RectButton>
                    <TouchableOpacity onPress={() => {navigation.navigate('services')}}>
                      <RectButton style={styles.searchUserButtonSave} >
                          <Text style={{color:'white'}}>Aprovar</Text>
                          <Icon name="save" size={40} color="white" />
                      </RectButton>
                    </TouchableOpacity>
                    
                </View>
            </View>

        </ScrollView>


  );
}

const styles = StyleSheet.create({
    serviceHeader: {
        paddingHorizontal: 15,
        flex: 1
  
    },
    author: {
        color: "black",
        marginBottom:-15,
        fontSize: 15,
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
    },
    select: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    },
    input: {
      marginTop: 15,
      width: '100%',
      backgroundColor: "#fff",
      borderRadius: 10,
      height: 56,
      paddingLeft: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      elevation: 3,
    },
    searchUserButton: {
      flexDirection: 'row',
      justifyContent: "space-around",
      color: 'white',
      width: '100%',
      height: 50,
      backgroundColor: "#0089a5",
      borderRadius: 100,
      alignItems: "center",
      marginTop:15,
      elevation: 3,
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
    authorSelect:{
      color: "black",
      fontSize: 15,
    }
});
