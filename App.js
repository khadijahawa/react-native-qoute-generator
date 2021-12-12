import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quote from "./src/components/Quote";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Random Quote </Text>
      <Quote/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#767C96',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    marginBottom:12,
    marginTop:45,
    margin:30,
    fontSize:30,
    color: "white",
    borderBottomColor: 'white',
    borderBottomWidth: 1,
   
  }
});
