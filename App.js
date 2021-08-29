import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Maps from './src/screens/Maps';
import Services from './src/screens/Services';
import Comments from './src/screens/Services/Comments.js';
import NewService from './src/screens/Services/NewService.js';
import Approve from './src/screens/Services/Approve.js';
import ApproveOne from './src/screens/Services/ApproveOne.js';
import Users from './src/screens/Users';
import User from  './src/screens/Users/User';
import NewUser from './src/screens/Users/NewUser.js';
import Estatistic from './src/screens/Estatistic';
import Project from './src/screens/Project';
import Login from './src/screens/Login/login.js';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'

const ServicesStack = createStackNavigator();

function ServicesTabStack() {
    return (
      <ServicesStack.Navigator >
        <ServicesStack.Screen 
          name="services" 
          options={{
            headerShown: false
          }}
          component={Services} />
        <ServicesStack.Screen name="Comentários" component={Comments} />
        <ServicesStack.Screen name="Sugerir Serviço" component={NewService} />
        <ServicesStack.Screen name="Aprovar Serviços" component={Approve} />
        <ServicesStack.Screen name="Aprovar Serviço" component={ApproveOne} />

      </ServicesStack.Navigator>
    );
  }

  const UsersStack = createStackNavigator();

  function UsersTabStack() {
    return (
      <UsersStack.Navigator >
        <UsersStack.Screen 
          name="users" 
          options={{
            headerShown: false
          }}
          component={Users} />
        <UsersStack.Screen name="Usuário" component={User} />
        <UsersStack.Screen name="Novo Usuário" component={NewUser} />
      </UsersStack.Navigator>
    );
  }

  const MapStack = createStackNavigator();

  function MapTabStack() {
      return (
        <MapStack.Navigator >
          <MapStack.Screen 
            name="Mapa" 
            options={{
              headerShown: false
            }}
            component={Maps} />
          <MapStack.Screen name="Comentários" component={Comments} />
          
  
        </MapStack.Navigator>
      );
    }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor='black'
      inactiveColor='#fff'
      barStyle={{
        backgroundColor:'#333',
        fintSize:20,
        fontWeight:'bold',
        color:'#333'
      }}  
    >
      <Tab.Screen 
        name="Home" 
        component={MapTabStack} 
        style={{color:'#000', activeColor:'black'}}
        options={{
          tabBarIcon:()=>(
            <Icon name="room" size={30} color="#000" />
          ),
        }}
        />
        <Tab.Screen 
        name="Serviços" 
        component={ServicesTabStack} 
        style={{color:'#000', activeColor:'black'}}
        options={{
          tabBarIcon:()=>(
            <Icon name="room-service" size={30} color="#000" />
          ),
          headerRight:()=>(
            <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>

              <Text>      </Text>
              <Icon name="account-circle" size={40} color="#0089a5" />
              <Text>      </Text>
            </View>
          )
        }}
        />
      <Tab.Screen 
        name="Usuários" 
        component={UsersTabStack} 
        style={{color:'#000', activeColor:'black'}}
        options={{
          tabBarIcon:()=>(
            <Icon name="people-alt" size={30} color="#000" />
          ),

        }}
        />
      
        <Tab.Screen 
        name="Estatísticas" 
        component={Estatistic} 
        style={{color:'#000', activeColor:'black'}}
        options={{
          tabBarIcon:()=>(
            <Icon name="equalizer" size={30} color="#000" />
          )
        }}
        />
        <Tab.Screen 
        name="Sobre" 
        component={Project} 
        style={{color:'#000', activeColor:'black'}}
        options={{
          tabBarIcon:()=>(
            <Icon name="info" size={30} color="#000" />
          )
        }}
        />
        <Tab.Screen 
        name="Login" 
        component={Login} 
        style={{color:'#000', activeColor:'black'}}
        options={{
          tabBarIcon:()=>(
            <Icon name="account-circle" size={30} color="#000" />
          )
        }}
        />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
/*export default function App() {
  return (
    <SafeAreaView>
      <Map/>
    </SafeAreaView>
  );
}*/


