import { StyleSheet, Text, View } from "react-native";
import { Surface } from 'react-native-paper';
import { Image } from "react-native";

export default function HomeScreen({navigation}){


  return(
    <View style={styles.container}>
      <View style={styles.column}>
        <Surface onPress={() => navigation.navigate("Tak", {name: "Bevers"})} onTouchStart={() => navigation.navigate("Tak", {name: "Bevers"})} style={styles.tab}><Image style={styles.image} source={require("../assets/beaver.png")}/></Surface>
        <Surface onPress={() => navigation.navigate("Tak", {name: "Bevers"})} onTouchStart={() => navigation.navigate("Tak", {name: "Wolven"})} style={styles.tab}><Image style={styles.image} source={require("../assets/wolf.png")}/></Surface>
        <Surface onPress={() => navigation.navigate("Tak", {name: "Bevers"})} onTouchStart={() => navigation.navigate("Tak", {name: "VG"})} style={styles.tab}><Image style={styles.image} source={require("../assets/Verkenners.png")}/></Surface>
      </View>
      <View style={styles.column}>
        <Surface onPress={() => navigation.navigate("Tak", {name: "Bevers"})} onTouchStart={() => navigation.navigate("Tak", {name: "Welpen"})} style={styles.tab}><Image style={styles.image} source={require("../assets/welp.png")}/></Surface>
        <Surface onPress={() => navigation.navigate("Tak", {name: "Bevers"})} onTouchStart={() => navigation.navigate("Tak", {name: "JVG"})} style={styles.tab}><Image style={styles.image} source={require("../assets/Jongverkenners.png")}/></Surface>
        <Surface onPress={() => navigation.navigate("Tak", {name: "Bevers"})} onTouchStart={() => navigation.navigate("Tak", {name: "Seniors"})} style={styles.tab}><Image style={styles.image} source={require("../assets/Seniors.png")}/></Surface>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    flexDirection: "row",
    
  },
  column: {
    margin: 20,
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  tab: {
    margin: 20,
    width: 130,
    height: 150,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 20,
    backgroundColor: "lightblue"
  },
  image: {
    alignSelf: "center",
    margin: 30,
    width: 100,
    height: 100
  },
  text: {
    alignSelf: "center",
    justifyContent: "center",
  }
});