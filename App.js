import React from "react";
import {Text,StyleSheet, View, FlatList,Image, Button, Alert} from "react-native"
import Custom from "./src/screens/CustomComponent";
import Flatlists from "./src/screens/Customs";
import NetFlixCard from "./src/screens/NetFlixCard";

const App = ()=>{

  return( 
      <View  >
      {/* <Text style={styles.textStyle}>Hello World!</Text>
      <Custom /> */}
      {/* <Flatlists />
      <Image source={require("../AwesomeProject/assets/adaptive-icon.png")} />
      <Button text="Hello" 
      style={styles.buttonstyle}
      onPress={()=>{
        Alert.alert("Clicked");

      
      }}
      /> */}
      <NetFlixCard />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    color:"white",
    flex:0.8,
  },
  buttonstyle:{
    color:"white",
  }
});
export default App;
