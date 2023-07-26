import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { db } from "../firebaseConfig";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function KidDetailScreen({navigation, route}){
  const [saldoAdd, setSaldoAdd] = React.useState(0)
  const kid = route.params.item;

  async function addSaldo(){
      var newSaldo = kid.saldo + saldoAdd;
      console.log(kid.saldo + " " + saldoAdd + " " + newSaldo);
      const kidRef = doc(db, "kids", kid.id);
      await updateDoc(kidRef, {
          saldo: newSaldo
      });
      navigation.popToTop();
  }

  async function removeKid(){
    console.log("verwijderen");
    const kidRef = doc(db, "kids", kid.id);
    await deleteDoc(kidRef);
    navigation.popToTop();
  }

  return(
    <View style={styles.container}>
      <View style={styles.holder}>
        <Text style={styles.item}>{kid.firstname} {kid.lastname}</Text>
        <Text style={styles.item}>Huidig saldo: {kid.saldo}</Text>
        <TextInput label="Toe te voegen saldo" style={styles.item} keyboardType="numbers-and-punctuation" value={saldoAdd} onChangeText={(value) => setSaldoAdd(parseFloat(value))}></TextInput>
        <Button style={styles.item} mode="contained" onPress={() => addSaldo()}>Toevoegen</Button>
        <Button style={styles.item} mode="contained" onPress={() => removeKid()}>Verwijderen</Button>
        <Button style={styles.item} mode="contained" onPress={() => navigation.navigate("VeranderTak", {kid: kid})}>Wijzig tak</Button>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  filler: {
    flex: 1
  },
  holder: {
    flex: 1,
    alignContent: "center",
    width: 300,
    alignSelf: "center",
  },
  item: {
    margin: 20,
    fontFamily: "FOS-light"
  }
})