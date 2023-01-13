import React from "react";
import { Surface, Text, Checkbox } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";


export default function Kid(props){
  const [drankje, setDrankje] = React.useState(false);
  const [koekje, setKoekje] = React.useState(false);

  return(

    <Surface style={styles.kindCard}>
      <View style={{flex: 1, alignSelf: "center"}}>
        <Text onPress={() => props.navigation.navigate("Saldo", {item: props.item})} style={styles.kind}>{props.item.firstname} {props.item.lastname}</Text>
      </View>
      <Text style={{paddingRight: 10}}>{props.item.saldo}€</Text>
      <Checkbox status={koekje? "checked" : "unchecked"} onPress={() =>{setKoekje(!koekje); props.item.koekje=!koekje}}></Checkbox>
      <Checkbox status={drankje? "checked" : "unchecked"} onPress={() =>{setDrankje(!drankje); props.item.drankje=!drankje}}></Checkbox>
    </Surface>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  addButton:{
    margin: 10
  }, 
  list:{
    flex: 1,
    backgroud: "green",
  },
  listholder:{
    flex: 1,
  },
  kind:{
    flex: 1,
    marginTop: 10,
    fontFamily: "FOS"
  },
  kindCard: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    margin: 5
  }
})