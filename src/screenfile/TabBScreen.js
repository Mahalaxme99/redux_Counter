import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//, JSON.stringify(props.navigation.route.params)

class TabBScreen extends React.Component {
  constructor (props){
    super(props)
    console.log('Give some message', JSON.stringify(props.route.ItemId))
  }
  render() {
    const { navigation } = this.props;
  //  const ItemId = navigation.getParam('ItemId', 'NO-ID');
  //  const ItemName = navigation.getParam('ItemName', 'some default value');
    
    return (
      <View style={style.container}>
        <Text style={style.text}> This is Screen B </Text>
        <Button title= 'Go to Screen C'
      color='#8a2be2'
      onPress={() =>
        this.props.navigation.navigate('ScreenC')}/>
       
        
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
export default TabBScreen;