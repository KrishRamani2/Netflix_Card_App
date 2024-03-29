import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatlists = () => {
  const names =[
    {
      "index":"1",
      "name":"Krish",
    },
    {
      "index":"2",
      "name":"Ramani",
    },
    {
      "index":"3",
      "name":"Developer",
    },
  ];
  return (
    <View>
      <Text style={styles.textstyle}>
        <FlatList 
        keyExtractor={(key)=>{
          return key.index
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={names} 
        renderItem={(element)=>{
          return <Text>{element.item.name}</Text>
        }}/>
      </Text>
    </View>
  )
}

export default Flatlists

const styles = StyleSheet.create({
    textstyle:{
      color:"black",
      flex: 1,
      fontSize:40,
      fontWeight:"bold",
      alignItems: 'center',
      justifyContent: 'center',
    },
    textstyletwo:{
      color:"black",
      alignItems:"center",
    }
})