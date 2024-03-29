import React from "react";
import {Text,StyleSheet,View} from "react-native"

const Custom = ()=>{
  const name = "Ramani";
  const getfullname = (firstname,middlename,lastname)=>{
    return `My name is ${firstname} ${middlename} ${lastname}`
  }
  return (
  <View style={styles.textStyle}> 
    <Text style={styles.textStyle}>{getfullname('Krish','vijay','Ramani')}🥇 </Text>
    <Text style={styles.textStyletwo}>@Welcome To Ramani Technical</Text>
  </View>
  
  );
};

const styles = StyleSheet.create({
  textStyle:{
    color:"white",
    flex: 1,
    fontSize:40,
    fontWeight:"bold",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyletwo:{
    color:"white",
    fontSize:20,

  }
});
export default Custom;