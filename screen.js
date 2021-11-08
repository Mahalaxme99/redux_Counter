import React from 'react';
import { Button, View, Text , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer';




function HomeScreen({ navigation }) {
  const onPressHandler = () =>{
    navigation.navigate('Notifications')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is HomeScreen</Text>
      <Button title= 'Go to Notificationscreen'
      onPress={onPressHandler}
      color='#8a2be2'/>
    
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function NotificationsScreen() {
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
}
const Drawer = createDrawerNavigator();
function Side(){
   return(
   
      <Drawer.Navigator
      initialRouteName='side2'
      drawerPosition = 'right'
      drawerType = 'permanent'
      >
         <Drawer.Screen name="Side1" component={Side1} />       
         <Drawer.Screen name="Side2" component={Side2}/>   
      </Drawer.Navigator>
   )}
function Side1(){
   return(
   <View>
      <Text>
         This is side 1
      </Text>
   </View>)
}
function Side2(){
   return(
   <View>
      <Text>
         This is side 2
      </Text>
   </View>)
}
function TabAScreen({ navigation }) {
  const onPressHandler = () =>{
    navigation.navigate('ScreenB')
  }
  return (
  <View>
    <Text style={{textAlign: 'center', marginTop: 300, fontSize:30,fontStyle:"italic",fontWeight:'bold',color:"#9400d3"}}>
      This is screen A
    </Text>
    <Button title= 'Go to Screen B'
      onPress={onPressHandler}
      color='#8a2be2'/>

  </View>
  );
}
function TabBScreen({ navigation }) {
  const onPressHandler = () =>{
    navigation.navigate('ScreenC')
  }
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300, fontSize:30,fontStyle:"italic",fontWeight:'bold',color:"#20b2aa"}}>
        This is screen B
      </Text>
      <Button title= 'Go to Screen C'
      onPress={onPressHandler}
      color='#8a2be2'/>
    </View>
  );
}
function TabCScreen({ navigation }) {
  const onPressHandler = () =>{
   navigation.navigate('ScreenA')
  }
  return (
  <View>
    <Text style={{textAlign: 'center', marginTop: 300,fontSize:30,fontStyle:"italic",fontWeight:'bold',color:"#0000cd" }}>
      This is screen C
    </Text>
    <Button title= 'Go to Screen A'
      onPress={onPressHandler}
      color='#8a2be2'/>

  </View>
  );
}
const Tab1 = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab1.Navigator initialRouteName="Home">
        <Tab1.Screen name="Home" component={HomeScreen} />
        <Tab1.Screen name="Notifications" component={NotificationsScreen} />
        <Tab1.Screen name="Side" component={Side} />
      </Tab1.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
})