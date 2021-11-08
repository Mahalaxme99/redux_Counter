import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ScreenA from './ScreenA'
import ScreenB from './ScreenB'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const Drawer = createDrawerNavigator();
function App (){
  return(
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='Screen_A'
      drawerPosition='left'
      drawerType='front'
      edgeWidth={100}
      hideStatusBar={true}
      overlayColor='00000090'
      drawerStyle={{
        backgroundColor:'#e6e6e6',
        width:400
      }}
      screenOptions={{
        headerShown:true,
       swipeEnabled:false,
       gestureEnabled:true,
       headerTitleAlign: 'center',
       headerStyle:{
         backgroundColor:'red'
       },
       headerTintColor:'yellow',
       headerTitleStyle:{
         fontSize:25,
         fontWeight:'bold',
       }
       
      }}>
        <Drawer.Screen name= 'Screen_A' component={ScreenA}
        options={{
          title:'TitleofScreenA',
          drawerIcon:({focused})=>(
            <FontAwesome5Icon
            name='amilia'
            size={focused ? 30: 10}
            color={focused ? 'blue' : 'black'}/>

          )
        }
        }/>
        <Drawer.Screen name= 'Screen_B' component={ScreenB}
        options={{
          title:'TitleofScreenB',
          drawerIcon:({focused})=>(
            <FontAwesome5Icon
            name='btc'
            size={focused ? 30: 10}
            color={focused ? 'blue' : 'black'}/>

          )
        }
        }/>
        
         


      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;