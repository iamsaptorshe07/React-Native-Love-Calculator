import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar,TextInput,Button} from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

class App extends React.Component{
  state = {
    "firstName":"",
    "secondName":"",
    "result":null
  }
  setFirstName = (value) =>{
    this.setState(
      {"firstName":value}
    )
  }

  setSecondName = (value) => {
    this.setState(
      {"secondName":value}
    )
  }

  calculateLove = () => {
    console.log("I am called");
    this.setState(
      {"result":null}
    )
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.firstName}&sname=${this.state.secondName}`, {
	  "method": "GET",
	  "headers": {
		  "x-rapidapi-key": "your rapid api key",
		  "x-rapidapi-host": "love-calculator.p.rapidapi.com"
	  }
  }).then(response => {
    console.log("fetched");
	  return response.json();
  }).then(data => {
    console.log(data)
    this.setState(
      {
        "result":data
      }
    )
  })
.catch(err => {
	console.error(err);
});
  }
  render(){
    return(
      <View style={{paddingTop:30,flex:1}}>
        <View>
        <Appbar.Header>
          <Appbar.Content title="Love Calculator" titleStyle={{alignSelf:'center'}} subtitle="React Native 1st Project" subtitleStyle={{alignSelf:'center',color:"white"}}/>
        </Appbar.Header>
        <View style={{marginTop:2,marginBottom:1}}>
          <TextInput label="Your Name" value={this.state.firstName}  onChangeText={this.setFirstName}/>
          <TextInput label="Your Lover's Name" value={this.state.secondName}  onChangeText={this.setSecondName}/>
        </View>
        <Button icon="heart" mode="contained" onPress={this.calculateLove.bind(this)}>
          Calculate
        </Button>
        <DisplayLove data={this.state.result}/>
        </View>
        <Text style={{textAlign:'center',marginTop:400}}>Made By Saptorshe Das</Text>
      </View>
    )
  }
}


export default App;

