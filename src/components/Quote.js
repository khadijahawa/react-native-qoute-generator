import React, { useState, useEffect } from "react";
import { Button, Center, NativeBaseProvider, Text } from "native-base";
import { StyleSheet } from "react-native";

export default function Quote() {
  
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  

  useEffect(() => {
    fetchNewQuote();
  }, [])

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
  return (
    <NativeBaseProvider style={styles.container}>
         <Center>
            <Text style={styles.quote}>{quote}</Text>
            <Text style={styles.author}>-{author}-</Text>
         
           <Button onPress={() => fetchNewQuote()}>generate a new quote</Button>
         </Center>
         </NativeBaseProvider>
        
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:48,
  },
  quote:{
    marginTop:100,
    marginBottom:23,
    fontSize:22,
    textAlign:"center",
    color:"gray",
  },
  author:{
    alignItems: 'center',
    marginBottom:23,
    fontWeight:"bold",
  }
});