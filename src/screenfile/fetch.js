import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity,
Alert
} from "react-native";


const onPressHandler=()=>{
  Alert.alert('The item in the list is clicked')
}
export default class Source extends React.Component {
 
static navigationOptions = ({ navigation }) => {
return {
  title: "Source Listing",
  headerStyle: {backgroundColor: "#fff"},
  headerTitleStyle: {textAlign: "center",flex: 1}
 };
};
constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[]
  };
}
componentDidMount(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
})
.catch(error=>console.log(error))
}
FlatListItemSeparator = () => {
return (
  <View style={{
     height: 10,
     width:"100%",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>
);
}
renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>Name is: {data.item.name}</Text>
<Text style={styles.lightText}>Email : {data.item.email}</Text>
<Text style={styles.lightText}>Phone no :{data.item.phone}</Text>
<Text style={styles.lightText}>Geo Latitude: {data.item.address.geo.lat}</Text>
<Text style={styles.lightText}>Website {data.item.website}</Text>
<Text style={styles.lightText}>Company name : {data.item.company.name}</Text></TouchableOpacity>
render(){
 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}
return(
 <View style={styles.container}>
 <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
    onPress={onPressHandler}
 />
 
</View>
)}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#3cb371"
   },
   lightText:{
     fontSize:20,
     fontWeight:'bold'
   }
});