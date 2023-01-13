import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { TextInput, Button, RadioButton } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebaseConfig";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function AddKidScreen({navigation, route}){
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [tak, setTak] = React.useState("Bevers");
  const [saldo, setSaldo] = React.useState(0);

  async function saveKid(){
    try {
      const docRef = await addDoc(collection(db, "kids"), {
        firstname: fname,
        lastname: lname,
        group: tak,
        saldo: saldo
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.pop();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return(
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.filler}></View>
        <View style={styles.holder}>
          <TextInput style={styles.input} label="voornaam" onChangeText={(text) => setFname(text)}></TextInput>
          <TextInput style={styles.input} label="achternaam" onChangeText={(text) => setLname(text)}></TextInput>
          <TextInput style={styles.input} keyboardType="numeric" returnKeyType="done" label="saldo" onChangeText={(text) => setSaldo(parseFloat(text))}></TextInput>
          <RadioButton.Group style={styles.radio} onValueChange={value => setTak(value)} value={tak} >
            <RadioButton.Item style={styles.radio} label="Bevers" value="Bevers"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="Welpen" value="Welpen"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="Wolven" value="Wolven"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="JVG" value="JVG"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="VG" value="VG"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="Seniors" value="Seniors"></RadioButton.Item>
          </RadioButton.Group>
          <Button style={styles.button} mode="contained" onPress={() => saveKid()}>Opslaan</Button>
        </View>
      <View style={styles.filler}></View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  holder:{
    flex: 2,
    justifyContent: "center",
  },
  radio:{
    width: 300,
    alignSelf: "center",
    fontFamily: "FOS",
  },  
  input: {
    width: 300,
    alignSelf: "center",
    margin: 10,
    fontFamily: "FOS",
  },
  button: {
    width: 300,
    alignSelf: "center",
    margin: 10,
    fontFamily: "FOS",
    marginTop: 30
  },
  filler: {
    flex: 1,
  },
  container: {
    flex: 1
  }
})