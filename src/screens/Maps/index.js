import React, { useEffect, useState } from "react";
import MapView, { Marker, Circle } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Image, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from "react-native-gesture-handler";
import { Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';

export default function Map({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  
  return (
    
    <View style={styles.container}>
      <View style={styles.footer}>
        <TextInput
          placeholder={'Buscar serviço por nome.'}
          style={styles.footerText}
        />
        <RectButton style={styles.searchUserButton} >
          <Icon name="search" size={24} color="#fff" />
        </RectButton>
        
      </View>
      <MapView 
        style={styles.map} 
        initialRegion = { { 
          latitude : -21.760516030021666, 
          longitude : -43.35036116673221,
          latitudeDelta : 0.0922,
          longitudeDelta : 0.0421,
        } } 
      >
        <Marker
          key={1}
          coordinate={{latitude : -21.754229314411596 , longitude : -43.353081746617285 }}
          title={"Sopão dos Pobres"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={2}
          coordinate={{latitude : -21.75425005894782 , longitude : -43.34899815178916 }}
          title={"Núcleo do Cidadão de rua"}
          description={"Albergue - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={3}
          coordinate={{latitude : -21.7600420274498 , longitude : -43.344449015924276 }}
          title={"Restaurante Popular"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={4}
          coordinate={{latitude : -21.733860912899846 , longitude : -43.38116593305992 }}
          title={"Vertir Popular"}
          description={"Roupas - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={5}
          coordinate={{latitude : -21.77430225195309 , longitude : -43.38655688293644 }}
          title={"Clínica Popular"}
          description={"Saúde - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={6}
          coordinate={{latitude : -21.687985472113887 , longitude : -43.429453187798806 }}
          title={"A mão que ajuda"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={7}
          coordinate={{latitude : -21.789882796024404, longitude : -43.38658803808071 }}
          title={"Centro Espírita Venânio Café"}
          description={"Saúde - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={8}
          coordinate={{latitude : -21.766721416222683, longitude : -43.38023038809586 }}
          title={"Povão lanches"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={9}
          coordinate={{latitude : -21.73310806030385,  longitude : -43.36702603812736 }}
          title={"Vestir"}
          description={"Roupa - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={10}
          coordinate={{latitude : -21.737650865371634,  longitude : -43.40859528802823 }}
          title={"Educa Mais"}
          description={"Educação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={11}
          coordinate={{latitude : -21.701304405915636,  longitude : -43.44869738793261 }}
          title={"Albergue Popular"}
          description={"Albergue - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={12}
          coordinate={{latitude :-21.679492123824552,  longitude : -43.44038353795244 }}
          title={"A mão que ajuda"}
          description={"Albergue - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={13}
          coordinate={{latitude : -21.70721133046298,  longitude : -43.42962443797809 }}
          title={"Comer bem"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={14}
          coordinate={{latitude : -21.694942831509,  longitude : -43.42179963799675 }}
          title={"Panela cheia"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={15}
          coordinate={{latitude : -21.755820649355627,  longitude : -43.36702603812736 }}
          title={"Caminho de Jesus"}
          description={"Albergue - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={16}
          coordinate={{latitude : -21.781708618550155,  longitude : -43.35431073815767 }}
          title={"Comida pra todos"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={17}
          coordinate={{latitude : -21.759908533946586,  longitude : -43.365069838132015 }}
          title={"Nascimento humano"}
          description={"Saúde - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={18}
          coordinate={{latitude : -21.724930649374624,  longitude : -43.35284358816117 }}
          title={"Viver"}
          description={"Albergue - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={19}
          coordinate={{latitude : -21.76717559687464,  longitude : -43.33915018819382 }}
          title={"Deixa viver"}
          description={"Saúde - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Marker
          key={20}
          coordinate={{latitude : -21.743556297267133, longitude : -43.38023038809586 }}
          title={"Amor ao próximo"}
          description={"Alimentação - Detalhes"}
          onCalloutPress={showDialog}
        />
        <Circle
          center={{ latitude :-21.760516030021666,   longitude : -43.35036116673221,  }}
          radius={2000}
          fillColor={'rgba(75,0,130, 0.2)'}
          strokeColor={'rgba(75,0,130,0.2)'}
          onCalloutPress={showDialog}
        />
        <Circle
          center={{ latitude :-21.743556297267133, longitude : -43.38023038809586   }}
          radius={1000}
          fillColor={'rgba(123,104,238, 0.2)'}
          strokeColor={'rgba(123,104,238,0.2)'}
          onCalloutPress={showDialog}
        />
        <Circle
          center={{ latitude :-21.679492123824552,  longitude : -43.44038353795244  }}
          radius={3000}
          fillColor={'rgba(255,153,102,0.3)'}
          strokeColor={'rgba(255,153,102,0.3)'}
          onCalloutPress={showDialog}
        />
        <Circle
          center={{ latitude : -21.737650865371634,  longitude : -43.40859528802823  }}
          radius={1500}
          fillColor={'rgba(255,255,0,0.3)'}
          strokeColor={'rgba(255,255,0,0.3)'}
          onCalloutPress={showDialog}
        />
      </MapView>


      <Provider>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <View style={styles.actions}>
                <View style={styles.leftActions}>
                  <Dialog.Title>Sopão dos Pobres</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>Alimentação</Paragraph>
                    <Text style={styles.author}>
                      <Icon name="star" size={24} color="gold" />
                      <Icon name="star" size={24} color="gold" /> 
                      <Icon name="star" size={24} color="gold" />
                      <Icon name="star-half" size={24} color="gold" />
                      <Icon name="star-outline" size={24} color="gold" />
                    </Text>
                  </Dialog.Content>
                </View>
                <Image 
                  style={styles.picture_url}
                  source={{ uri: 'https://scontent.fjdf2-2.fna.fbcdn.net/v/t1.6435-9/67971161_2400095510314186_8254223983751200768_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=TjeXYUfKuVwAX9-m9RZ&_nc_oc=AQnE173vhpxnsklIrrBikwOI-3LKoz747gx-n0cn2bx5AYtahvEl9mf1Mp8ShXeiaYA&_nc_ht=scontent.fjdf2-2.fna&oh=96e2851fdb73305c84b2d5d078cb4f01&oe=6141C3D6' }}>
                </Image>
                </View>
                <Dialog.Content>
                
                <Paragraph><Text style={styles.author}>Endereço: </Text>Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Paragraph>
                <Paragraph><Text style={styles.author}>E-mail: </Text> sopao@email.com</Paragraph>
                <Paragraph><Text style={styles.author}>Telefone: </Text> (32) 3286-2011</Paragraph>
                <Paragraph><Text style={styles.author}>Funcionamento: </Text> 11h:00 às 14h:00</Paragraph>
                <Paragraph><Text style={styles.author}>Capacidade </Text> 300 </Paragraph>
                <Paragraph><Text style={styles.author}>Qtd média de atendimentos: </Text> 300 </Paragraph>
                <Text style={styles.author}>Mídias sociai: <Icon name="facebook" size={30} color="blue" /></Text>

              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}><Icon name="close" size={30} color="#0089a5" /></Button>
                <Button onPress={() => {navigation.navigate('Comentários')}}><Icon name="comment" size={30} color="#0089a5" /></Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '90%',
    marginBottom: 0
  },
  footer: {
    marginTop: 15,
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  footerText: {
    width: 200,
    color: "#8fa7b3",
  },
  searchUserButton: {
    width: 56,
    height: 56,
    backgroundColor: "#0089a5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  picture_url: {
    width: 100,
    height: 100,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftActions: {
    flexDirection:'column'
  },
  place: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15
  },
  input: {
    height: 100,
    
    elevation: 3,
    padding: 10,
  },


});