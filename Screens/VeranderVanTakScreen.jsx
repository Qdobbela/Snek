import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Text, Button, RadioButton } from 'react-native-paper';
import { doc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebaseConfig";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function VeranderVanTakScreen({navigation, route}, props){
  const [tak, setTak] = React.useState(route.params.kid.group);
  const [loading, setLoading] = React.useState(false);
  const kid = route.params.kid;

  async function saveKid(){
    setLoading(true);
    try {
        const kidRef = doc(db, "kids", kid.id);
        await updateDoc(kidRef, {
            group: tak
        });
      navigation.popToTop();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return(
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.filler}></View>
        <View style={styles.holder}>
          <Text style={styles.nameKid}>{kid.firstname}</Text>   
          <RadioButton.Group style={styles.radio} onValueChange={value => setTak(value)} value={tak} >
            <RadioButton.Item style={styles.radio} label="Bevers" value="Bevers"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="Welpen" value="Welpen"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="Wolven" value="Wolven"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="JVG" value="JVG"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="VG" value="VG"></RadioButton.Item>
            <RadioButton.Item style={styles.radio} label="Seniors" value="Seniors"></RadioButton.Item>
          </RadioButton.Group>
          <Button style={styles.button} mode="contained" loading={loading} disabled={loading} onPress={() => saveKid()}>Sla op</Button>
        </View>
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
  },
  nameKid: {
    alignSelf: "center",
    fontFamily: "FOS",
    fontSize: 30,
    marginBottom: 30,
    marginTop: 30
  }
})