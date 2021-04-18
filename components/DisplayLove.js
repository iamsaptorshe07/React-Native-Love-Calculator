import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image } from 'react-native';

const DisplayLove = (prop) => {
    if(prop.data != null ){
    return(
        <View style = {styles.container}>
            <Text style={styles.resultText}>{prop.data.percentage}</Text>
            <Text style={styles.resultText}>{prop.data.result}</Text>
        </View>
    )}
    else{
        return (
            <View style = {styles.container}>
                <Text style={styles.resultText}>Your Result will display here</Text>
            </View>
        )
    }
}

export default DisplayLove

const styles = StyleSheet.create(
    {
        container: {
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:20,
        paddingTop:20,
        },
        resultText : {
            fontSize:20
        }
  });
  