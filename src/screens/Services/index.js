import React from 'react';
import {View, Text,SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from "react-native-gesture-handler";



export default function Services({navigation}) {
        return (
            <View style={styles.container}>
               <TouchableOpacity style={styles.footer1} onPress={() => {navigation.navigate('Sugerir Serviço')}}>
                    <Text style={styles.footerText}> Sugerir  </Text>

                    <RectButton style={styles.searchUserButton} onPress={() => {navigation.navigate('Sugerir Serviço')}} >
                        <Icon name="add" size={60} color="#0089a5" />
                    </RectButton>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footer2} onPress={() => {navigation.navigate('Aprovar Serviços')}}>
                    <Text style={styles.footerText2}>Aprovar</Text>

                    <RectButton style={styles.searchUserButton} onPress={() => {navigation.navigate('Aprovar Serviços')}} >
                        <Icon name="thumb-up" size={40} color="#0089a5" />
                    </RectButton>
                </TouchableOpacity>
                <ScrollView >
                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Sopão dos Pobres</Text>
                            <Text style={styles.place}>Alimentação</Text>
                            <Text style={styles.author}>
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'https://scontent.fjdf2-2.fna.fbcdn.net/v/t1.6435-9/67971161_2400095510314186_8254223983751200768_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=TjeXYUfKuVwAX9-m9RZ&_nc_oc=AQnE173vhpxnsklIrrBikwOI-3LKoz747gx-n0cn2bx5AYtahvEl9mf1Mp8ShXeiaYA&_nc_ht=scontent.fjdf2-2.fna&oh=96e2851fdb73305c84b2d5d078cb4f01&oe=6141C3D6' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                    <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Comida Para todos</Text>
                            <Text style={styles.place}>Alimentação</Text>
                            <Text style={styles.author}>
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                        <View style={styles.serviceOptions}>
                            <TouchableOpacity>
                                <Icon name="keyboard-control" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'https://conexaoplaneta.com.br/wp-content/uploads/2020/05/em-acao-iniciativa-distribui-refeicoes-moradores-rua-conexao-planeta.jpg' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Centro Espírita Venâncio Café</Text>
                            <Text style={styles.place}>Saúde</Text>
                            <Text style={styles.author}>
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                        <View style={styles.serviceOptions}>
                            <TouchableOpacity>
                                <Icon name="keyboard-control" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'http://www.agenciabrasilia.df.gov.br/wp-conteudo/uploads/2017/12/atendimento-moradores-rua-tony-winston-1024x683.jpg' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Educa Mais</Text>
                            <Text style={styles.place}>Educação</Text>
                            <Text style={styles.author}>
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                        <View style={styles.serviceOptions}>
                            <TouchableOpacity>
                                <Icon name="keyboard-control" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'https://conteudo.imguol.com.br/c/noticias/2015/04/06/a-escola-de-meninos-e-meninas-do-parque-a-emmp-atende-alunos-moradores-de-rua-ou-que-moram-em-abrigos-do-distrito-federal-em-braslia-1428341927318_300x200.jpg.webp' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Sopão dos Pobres</Text>
                            <Text style={styles.place}>Alimentação</Text>
                            <Text style={styles.author}>
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'https://scontent.fjdf2-2.fna.fbcdn.net/v/t1.6435-9/67971161_2400095510314186_8254223983751200768_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=TjeXYUfKuVwAX9-m9RZ&_nc_oc=AQnE173vhpxnsklIrrBikwOI-3LKoz747gx-n0cn2bx5AYtahvEl9mf1Mp8ShXeiaYA&_nc_ht=scontent.fjdf2-2.fna&oh=96e2851fdb73305c84b2d5d078cb4f01&oe=6141C3D6' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Comida Para todos</Text>
                            <Text style={styles.place}>Alimentação</Text>
                            <Text style={styles.author}>
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                        <View style={styles.serviceOptions}>
                            <TouchableOpacity>
                                <Icon name="keyboard-control" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'https://conexaoplaneta.com.br/wp-content/uploads/2020/05/em-acao-iniciativa-distribui-refeicoes-moradores-rua-conexao-planeta.jpg' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Centro Espírita Venâncio Café</Text>
                            <Text style={styles.place}>Saúde</Text>
                            <Text style={styles.author}>
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                        <View style={styles.serviceOptions}>
                            <TouchableOpacity>
                                <Icon name="keyboard-control" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'http://www.agenciabrasilia.df.gov.br/wp-conteudo/uploads/2017/12/atendimento-moradores-rua-tony-winston-1024x683.jpg' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.serviceHeader}>
                        <View style={styles.userInfo}>
                            <Text style={styles.author}>Educa Mais</Text>
                            <Text style={styles.place}>Educação</Text>
                            <Text >
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star" size={24} color="gold" /> 
                                <Icon name="star" size={24} color="gold" />
                                <Icon name="star-half" size={24} color="gold" />
                                <Icon name="star-outline" size={24} color="gold" />
                            </Text>
                        </View>

                        <View style={styles.serviceOptions}>
                            <TouchableOpacity>
                                <Icon name="keyboard-control" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image 
                            style={styles.picture_url} 
                            source={{ uri: 'https://conteudo.imguol.com.br/c/noticias/2015/04/06/a-escola-de-meninos-e-meninas-do-parque-a-emmp-atende-alunos-moradores-de-rua-ou-que-moram-em-abrigos-do-distrito-federal-em-braslia-1428341927318_300x200.jpg.webp' }}>
                        </Image>
                    </View>
                        <View style={styles.infos}>
                            
                            <Text style={styles.info}><Text style={styles.cab}>Endereço:</Text >Rua Santo Antônio, 178 - Centro - Juiz de Fora - MG (Em frente ao INSS)</Text>
                            <Text style={styles.info}><Text style={styles.cab}>E-mail:</Text > sopao@email.com</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Telefone:</Text >(32) 3286 - 2011</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Funcionamento:</Text > 11h:00 às 14h:00</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Capacidade:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Qnt. média de atendimento:</Text >300</Text>
                            <Text style={styles.info}><Text style={styles.cab}>Mídia Social</Text ><Icon name="facebook" size={24} color="blue" /></Text>
                        </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action} onPress={() => {navigation.navigate('Comentários')}}>
                                    <Icon name="message" size={35} color="#0089a5" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        );
    }

    Services.navigationOptions = {
        title: 'Serviços',
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
    picture_url: {
        width: '100%',
        height: 300,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        marginRight: 8
    },
    leftActions: {
        flexDirection:'row'
    },
    footer: {
        padding: 15,
        marginBottom:50
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

    footer2: {
        width: 160,
        left: 200,
        top:30,
        backgroundColor: "#fff",
        borderRadius: 30,
        height: 56,
        paddingLeft: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3,
      },
      footerText: {
        width: 55,
        color: "#8fa7b3",
        fontSize: 16
      },
      footerText2: {
        width: 60,
        color: "#8fa7b3",
        fontSize: 16
      },
    
      searchUserButton: {
        width: 56,
        height: 56,
        backgroundColor: "white",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      },

});
