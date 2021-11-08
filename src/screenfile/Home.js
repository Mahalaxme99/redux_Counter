import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import {View, Text, Button,StyleSheet, Alert, TextInput } from 'react-native'


export default function Home({ navigation , route }){


    const [name, setName] = useState ('');
    const [age, setAge]= useState('');
    
    useEffect(() => {
        getData();

    }, []);

    
    const getData =()=>{
        try {
            AsyncStorage.getItem('UserData')
            .then(value => {
                if(value!=null){
                    let user = JSON.parse(value);
                    setName( user.Name);
                    setAge( user.Age);
                }
            }
            )
        } catch (error) {
          console.log(error)  
        }   
    }
    const updateData = async () =>{
        if(name.length == 0){
            Alert.alert('Warning!', 'Please write your name');

        }else{
        try {
            await AsyncStorage.setItem('UserName',name);
            Alert.alert('Success!, Your data  has been updated')
        } catch (error) {
          console.log(error);  
        }

        }
    }
    const removeData = async () =>{
        
        try {
            await AsyncStorage.removeItem('UserName');
            navigation.navigate('Log')
            Alert.alert('Success!, Your data  has been updated')
        } catch (error) {
          console.log(error);  
        }

        
    }
    return(
    <View style={style.viewstyle}>
        <Text style={style.text}>
            Welcome {name} !
            
        </Text>
        <Text style={style.text}>
            Your age is  {age} 
            
        </Text>
        <TextInput  style={style.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(value) => setName(value) }/>
        <Button title= 'update'
        color='#ff7f00'
        onPress={updateData}/>
        <Button title= 'remove'
        color='#f40100'
        onPress={removeData}/>
    
        
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


    },
input:{
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize : 20,
    marginTop: 130,
    marginBottom: 10
} 
    }
)










