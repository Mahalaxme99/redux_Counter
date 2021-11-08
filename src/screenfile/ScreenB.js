import React from 'react'
import {View, Text, Button, StyleSheet } from 'react-native'


export default function ScreenB({ route , navigation}){

    const { ItemName }  = route.params;
    const { ItemId }  = route.params;


    const onPressHandler =()=> {
        navigation.navigate('Screen_A', {Message: 'This is the message from Screen B'})
    }
    return(
    <View style={style.viewstyle}>
        <Text style={style.text}>
            This is screen B
            
        </Text>
        <Button title='Go to Screen A'
        color='red'
        onPress={onPressHandler}/>
        <Text style={style.text}>
            {JSON.stringify(ItemName)}
        </Text>
        <Text style={style.text}>
        {JSON.stringify(ItemId)}
        </Text>
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
            fontSize:35,
            fontStyle:'italic',
            fontWeight:'bold'

        }
    }
)