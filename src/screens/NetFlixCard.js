import { StyleSheet, Text, View,Image, Button, Linking, Alert } from 'react-native'
import React from 'react'

const NetFlixCard = () => {
    const handleWatchNow = () => {
        Alert.alert(
          "Rendering to that page",
          "",
          [
            {
              text: "OK",
              onPress: () => Linking.openURL("https://www.netflix.com/in/title/81437051")
            }
          ]
        );
      };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>NetFlixCard</Text>
      <View style={styles.poster}> 
        <Image 
        style={styles.imagestyle}
        source={require("../../assets/image.jpg")}></Image>

    <View style={styles.poster_info}>
        <Text style={styles.poster_title}>THE GENTLEMEN
        </Text>
        <Text style={styles.poster_text}>
Mystery, intrigue, high society, secrets, scandals, romance, drama, betrayal, wit.</Text>
<Button
            title='Watch Now'
            style={styles.buttonstyle}
            onPress={handleWatchNow}
          />
    </View>
    </View>
    </View>
  )
}

export default NetFlixCard

const styles = StyleSheet.create({
    container:{
        padding:50,
        justifyContent:"center",
        alignItems:"center",
    },
    header:{
        fontSize:30,
        marginBottom:20,
    },
    poster:{
        width:250,
        borderWidth:1,
        alignItems:"center",
    },
    poster_info:{
        alignItems:"center",
        marginVertical:10,
    },
    poster_title:{
        fontSize:20,
        marginBottom:10,
    },
    poster_text:{
        color:"#999",
        paddingHorizontal:20,
        marginBottom:10,
    },
    imagestyle:{
        width:"100%",
        height:undefined,
        aspectRatio:1,
    },
    buttonstyle:{
        borderWidth:0,
        borderRadius:20,
    },
})