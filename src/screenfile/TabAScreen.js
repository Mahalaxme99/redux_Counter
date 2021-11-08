import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//, {  ItemId: 12 , ItemName: 'This is a ScreenA Item' }
class TabAScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}> This is Screen A </Text>
        <Button title= 'Go to Screen B'
      color='#8a2be2'
      onPress={() =>
        this.props.navigation.navigate('ScreenB', {  ItemId: 12 , ItemName: 'This is a ScreenA Item' })}/>
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
export default TabAScreen;