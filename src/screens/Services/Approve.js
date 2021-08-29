import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from "react-native-gesture-handler";

export default function Approve({navigation}) {

  return (
        <View style={styles.serviceHeader}>
            <ScrollView >
                <View style={styles.margin}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Sopão dos Pobres</Text>
                        <RectButton style={styles.searchUserButtonVisibility} onPress={() => {navigation.navigate('Aprovar Serviço')}}>
                            <Text style={{color:'white'}}>Ver</Text>
                            <Icon name="visibility" size={40} color="white" />
                        </RectButton>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Ajuda Cidadão</Text>
                        <RectButton style={styles.searchUserButtonVisibility} >
                            <Text style={{color:'white'}}>Ver</Text>
                            <Icon name="visibility" size={40} color="white" />
                        </RectButton>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>Mão Amiga</Text>
                        <RectButton style={styles.searchUserButtonVisibility} >
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
});

