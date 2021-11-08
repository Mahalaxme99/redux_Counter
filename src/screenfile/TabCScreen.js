import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class TabCScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}> This is Screen C</Text>
        <Button title= 'Go to Screen A'
      color='#8a2be2'
      onPress={() =>
        this.props.navigation.navigate('ScreenA')}/>
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
export default TabCScreen;