import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { onUserLogin, onFetchProduct } from '../redux';

const LoginScreen = (props) => {
    const { userReducer, onUserLogin, onFetchProduct } = props ;

    const { user, products} = userReducer

    console.log(user, products);

    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                Hello React-native
            </Text>
            <TouchableOpacity
                style={
                    {
                        height:50,
                        width: 220,
                        marginTop: 10,
                        marginBottom:  10,
                        backGroundColor: '#FF5733',
                        borderRadius: 30,
                        justifyContent:'center',
                        alignItems:'center',


                    }
                }
                onPress= { ()=> onUserLogin({ email: 'test@test.com', password: '12345678'})}>
            </TouchableOpacity>
            <Text style={{ color: '#FFF', fontSize: 18}}>
                User Login
            </Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        view:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontSize:20,
            fontWeight: 'bold',
            fontStyle:'italic'
        }
    }
)
export default LoginScreen;