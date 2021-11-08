import React, {useState} from 'react'
import {View, Text, Button,StyleSheet } from 'react-native'


export default function ScreenA({ navigation , route }){

    const Users = [
        {id:1,
        name: 'User A'},
        {id:2,
        name: 'User B'},
        {id:3,
        name: 'User C'},
    ]
    const [name, SetName] = useState('')
    const onPressHandler1 =()=> {
       
        navigation.toggleDrawer();
    }

    
    const onPressHandler =()=> {
       
        //navigation.navigate('Screen_B', { ItemName: 'This is a ScreenA Item', ItemId: 12 });
        for (let user of Users){
            SetName(user.name);
        }
    }
    return(
    <View style={style.viewstyle}>
        <Text style={style.text}>
            This is screen A
            
        </Text>
    
        <Button title='Get the last user'
        color='red'
        onPress={onPressHandler}/>
        <Button title='Open the drawer'
        color='red'
        onPress={onPressHandler1}/>
         <Text style={style.text}>
        {route.params ?. Message} </Text>
        <Text style={style.text}>
        {name} </Text>
    </View>
    )
    
}
const style=StyleSheet.create(
    {
        viewstyle:{
            flex:1,
            justifyContent: 'center',
            alignItems:'center'
        },
        text:{
            fontSize: 35,
            fontStyle:'italic',
            fontWeight:'bold'

        }
    }
)