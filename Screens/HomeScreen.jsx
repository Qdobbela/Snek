import { StyleSheet, Text, View } from "react-native";
import { Surface } from 'react-native-paper';
import { Image } from "react-native";

export default function HomeScreen({navigation}){


  return(
    <View style={styles.container}>
      <View style={styles.column}>
        <Surface onTouchStart={() => navigation.navigate("Tak", {name: "Bevers"})} style={styles.tab}><Image style={styles.image} source={require("../assets/beaver.png")}/></Surface>
        <Surface onTouchStart={() => navigation.navigate("Tak", {name: "Wolven"})} style={styles.tab}><Image style={styles.image} source={require("../assets/wolf.png")}/></Surface>
        <Surface onTouchStart={() => navigation.navigate("Tak", {name: "VG"})} style={styles.tab}><Image style={styles.image} source={require("../assets/Verkenners.png")}/></Surface>
      </View>
      <View style={styles.column}>
        <Surface onTouchStart={() => navigation.navigate("Tak", {name: "Welpen"})} style={styles.tab}><Image style={styles.image} source={require("../assets/welp.png")}/></Surface>
        <Surface onTouchStart={() => navigation.navigate("Tak", {name: "JVG"})} style={styles.tab}><Image style={styles.image} source={require("../assets/Jongverkenners.png")}/></Surface>
        <Surface onTouchStart={() => navigation.navigate("Tak", {name: "Seniors"})} style={styles.tab}><Image style={styles.image} source={require("../assets/Seniors.png")}/></Surface>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    flexDirection: "row"
  },
  column: {
    flex: 1,
  },
  tab: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    width: 150,
    margin: 30
  }
});