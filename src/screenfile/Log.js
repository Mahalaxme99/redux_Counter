import React, {useState, useEffect} from 'react'
import {View, Text, Button, StyleSheet , Image, TextInput, Alert} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Log( { navigation } ) {

    const [name, setName]= useState('');
    const [age, setAge]= useState('');
        
    useEffect(() => {
        getData();

    }, []);

    
    const getData =()=>{
        try {
            AsyncStorage.getItem('UserData')
            .then(value => {
                if(value!=null){
                    navigation.navigate('Home')
                }
            }
            )
        } catch (error) {
          console.log(error)  
        }   
    }
    
    const setData = async () =>{
        if(name.length == 0 || age.length == 0){
            Alert.alert('Warning!', 'Please write your name');

        }else{
        try {
            var user={
                Name : name,
                  Age : age
            }
            await AsyncStorage.setItem('UserData',JSON.stringify(user));
            navigation.navigate('Home');
        } catch (error) {
          console.log(error);  
        }

        }
    }


    return(
    <View style={style.viewstyle}>
        <Image style={style.logo}
        source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}   />
        <Text style={style.textstyle}>
            Login with AsyncStorage
        </Text>
        <TextInput style={style.input}
        placeholder='Enter your name' 
        onChangeText={ (value) => setName(value) } />
        <TextInput style={style.input}
        placeholder='Enter your age' 
        onChangeText={ (value) => setAge(value) } />
        <Button title='login'
        color='#1eb900'
        onPress={setData}/>
    </View>
    )
}
const style=StyleSheet.create(
    {
        viewstyle:{
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:'#87ceeb'
       },
    logo:{
        width: 100,
        height: 100,
        margin: 20,
    },
textstyle:{
    fontSize:20,
    fontStyle:'italic',
    color: 'purple',
    fontWeight: 'bold',
    marginBottom:100
},
input:{
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize : 20,
   // marginTop: 130,
    marginBottom: 10
}   }
)