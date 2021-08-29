import React, {useState,useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View} from 'react-native';

export default function Login()
{
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.container, styles.darkbg]}>
            <View style={styles.login__logomarca}>
                <Image style={styles.logo} source={require('../../../assets/localizacidadao.png')} />
            </View>

            <View style={styles.login__form}>
                <TextInput style={styles.login__input} placeholder='Usuário:' />
                <TextInput style={styles.login__input} placeholder='Senha:' secureTextEntry={true} />
                <TouchableOpacity style={styles.login__button}>
                    <Text style={styles.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.cadastro}>Não tem cadastro? Faça aqui!</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      },
darkbg:{
    backgroundColor:"#333"
},
login__logomarca:{
    marginBottom: 10,
},
logo:{
    width:200,
    height:200,
  
},
login__msg:(text='none')=>({
    fontWeight:"bold",
    fontSize: 22,
    color:"red",
    marginBottom: 15,
    display: text
}),
login__form:{
    width: "80%",
    
},
login__input:{
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15
},
login__button:{
    padding: 12,
    backgroundColor: "#F58634",
    alignSelf:"center",
    borderRadius:5
},
login__buttonText:{
    fontWeight:"bold",
    fontSize: 22,
    color:"#333"
},
cadastro:{
    marginTop:15,
    fontWeight:"bold",
    color: 'white',
    alignSelf:"center"}

})