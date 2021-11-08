import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}> This is Home Screen</Text>
        <Button title= 'Go to Friends screen'
      color='#8a2be2'
      onPress={() =>
        this.props.navigation.navigate('Friends')}/>
        <Button title= 'Open the drawer'
      color='#8a2be2'
      onPress={() =>
        this.props.navigation.toggleDrawer()}/>
      </View>
    );
  }
}
const style = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems: 'center'
        },
        text:{
            fontSize:30,
            fontWeight:'bold',
            fontStyle:'italic',
        

        }
    }
)
export default HomeScreen;