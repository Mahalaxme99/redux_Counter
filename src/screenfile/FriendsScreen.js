import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import TabAScreen from './TabAScreen';
import TabBScreen from './TabBScreen';
import TabCScreen from './TabCScreen';



const Tab = createMaterialBottomTabNavigator();
class FriendsScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator
            screenOptions={({route}) => ({
               tabBarIcon: ({focused, size, color}) =>{
                  let iconName;
                  if(route.name === 'ScreenA'){
                     iconName = 'autoprefixer';
                     size =focused ? 25:20;
                     color = focused ? 'blue' : 'red' 
        
                  }else if(route.name === 'ScreenB'){
                     iconName ='btc';
                     size = focused ? 25 : 20;
                     color = focused ? 'blue' : 'red' 
                  }
                  else if(route.name === 'ScreenC'){
                    iconName ='cuttlefish';
                    size = focused ? 25 : 20;
                    color = focused ? 'blue' : 'red' 
                 }
                  return(
                     <FontAwesome5
                     name={iconName}
                     size={size}
                     color={color}/>
                  )
        
               }
            })}
            tabBarOptions={{
               activeBackgroundColor : 'yellow',
               inactiveBackgroundColor : 'gray',
               showLabel: true,
               labelStyle: {fontSize: 15}
            }}
            barStyle = {{backgroundColor: '#694fad'}}>
                <Tab.Screen name="ScreenA" component={TabAScreen} options= {{tabBarBadge:3}}/>
                <Tab.Screen name="ScreenB" component={TabBScreen} />
                <Tab.Screen name="ScreenC" component={TabCScreen} />
            </Tab.Navigator>
          );
        }}

export default FriendsScreen;