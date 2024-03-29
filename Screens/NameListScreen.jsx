import { FlatList, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { collection, where, query as fireQuery, getDocs, updateDoc, doc, orderBy } from "firebase/firestore"; 
import { db } from "../firebaseConfig";
import { Button, Checkbox, Surface } from "react-native-paper";
import React, { useEffect } from "react";
import Kid from "../components/Kid";
import { useIsFocused } from "@react-navigation/native";

export default function NameListScreen({navigation, route}){
  const tak = route.params.name;
  const [leden, setLeden] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  var unique = true;
  
  const isFocused = useIsFocused()

  const kids = collection(db, "kids");

  useEffect(() => {
      getKids();
    }
  , [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('pop', () => {
      getKids();
    });
    return unsubscribe;
  }, [navigation]);
  
  async function getKids(){
    setLeden([]);
    const query = await getDocs(fireQuery(kids, where("group", "==", route.params.name), orderBy("firstname")));
    query.forEach((doc) => {
      var lid = doc.data();
      lid.id = doc.id;
      leden.push(lid);
    });
    setLeden(leden);
  }

  async function opslaan(){
    leden.forEach(async (lid) => {
      console.log(lid.firstname + ": " + lid.koekje + " " + lid.drankje + " aanwezigheid:" + lid.aanwezigheidCount);
      var newSaldo = lid.saldo;
      if(lid.koekje){
        newSaldo = newSaldo-0.5;
      }
      if(lid.drankje){
        newSaldo = newSaldo-0.5;
      }
      const kidRef = doc(db, "kids", lid.id);
      await updateDoc(kidRef, {
          saldo: newSaldo
      });

      if(lid.aanwezigheidCount){
        if(lid.aanwezigheid){
          var newCount = lid.aanwezigheidCount + 1;
          await updateDoc(kidRef, {
            aanwezigheidCount: newCount
          });
        }
      }else{
        if(lid.aanwezigheid){
          await updateDoc(kidRef, {
            aanwezigheidCount: 1
          });
        }else{
          await updateDoc(kidRef, {
            aanwezigheidCount: 0
          });
        }
      }
    })
    navigation.popToTop();
  }

  const renderItem = ({ item }) => (
    <Kid navigation={navigation} route={route} item={item} ></Kid>
  );

  return(
    <View style={styles.container}>
      <Button style={styles.addButton} mode="contained" onPress={() => navigation.navigate("Add", {tak: tak})}>Lid Toevoegen</Button>
      <View style={styles.listholder}>
        <FlatList style={styles.list} data={leden} extraData={loading} renderItem={renderItem} />
      </View>
      <Button style={styles.addButton} mode="contained" onPress={() => opslaan()}>Opslaan</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  addButton:{
    margin: 10,
    fontFamily:"FOS"
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
  },
  kindCard: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center"
  }
})