import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);
  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);
  const [isSelected9, setSelection9] = useState(false);

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>Selecione os dados para gerar o relatório:</Text>
        </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Serviços</Text>
      </View>
      <View style={styles.checkboxContainer2}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label2}>Tipo</Text>
      </View>
      <View style={styles.checkboxContainer2}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <Text >Região</Text>
      </View>
      <View style={styles.checkboxContainer2}>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
        />
        <Text >Quantidade Atendimentos</Text>
      </View>
      <View style={styles.checkboxContainer2}>
        <CheckBox
          value={isSelected5}
          onValueChange={setSelection5}
          style={styles.checkbox}
        />
        <Text >Tipo</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected6}
          onValueChange={setSelection6}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Usuários</Text>
      </View>
      <View style={styles.checkboxContainer2}>
        <CheckBox
          value={isSelected7}
          onValueChange={setSelection7}
          style={styles.checkbox}
        />
        <Text >Idade</Text>
      </View>
      <View style={styles.checkboxContainer2}>
        <CheckBox
          value={isSelected8}
          onValueChange={setSelection8}
          style={styles.checkbox}
        />
        <Text >Tipo</Text>
      </View>
      <View style={styles.checkboxContainer2}>
        <CheckBox
          value={isSelected9}
          onValueChange={setSelection9}
          style={styles.checkbox}
        />
        <Text >Escolaridade</Text>
      </View>
        <TouchableOpacity>
            <RectButton style={styles.searchUserButtonSave} >
            <Text style={{color:'white'}}>Baixar Relatório</Text>
                <Icon name="get-app" size={40} color="white" />
            </RectButton>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left:15,
    marginTop:20
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize:16,
    fontWeight:'bold'
  },
  checkboxContainer2: {
    flexDirection: "row",
    left:15
  },
  searchUserButtonSave: {
    flexDirection: 'row',
    justifyContent: "space-around",
    width: '90%',
    height: 50,
    backgroundColor: "green",
    borderRadius: 100,
    alignItems: "center",
    marginTop:15,
    marginBottom:20,
    elevation: 3,
    
  },
  header:{
      fontSize:16,
      fontWeight:'bold',
  }

});

export default App;