import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import Log from './Log'



const Stack = createStackNavigator();
function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Log'
        screenOptions={{
        
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
        <Stack.Screen name= 'Log' component={Log}
        options={{
          headerShown: false,
        }
        }/>
        <Stack.Screen name= 'Home' component={Home}
        />
        
         


      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;