import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import NameListScreen from './Screens/NameListScreen';
import AddKidScreen from './Screens/AddKidScreen';
import VeranderVanTakScreen from './Screens/VeranderVanTakScreen';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import KidDetailScreen from './Screens/KidDetailScreen';
import {useFonts} from "expo-font";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Stack = createNativeStackNavigator();

const fontConfig = {
  fontFamily: "FOS",  
}

const theme = {
  ...DefaultTheme,
  colors: {
      "primary": "rgb(0, 93, 157)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(175, 236, 255)",
      "onPrimaryContainer": "rgb(0, 31, 39)",
      "secondary": "rgb(75, 98, 105)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(206, 231, 239)",
      "onSecondaryContainer": "rgb(6, 31, 37)",
      "tertiary": "rgb(87, 92, 126)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(222, 224, 255)",
      "onTertiaryContainer": "rgb(20, 25, 55)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(251, 252, 254)",
      "onBackground": "rgb(25, 28, 29)",
      "surface": "rgb(251, 252, 254)",
      "onSurface": "rgb(25, 28, 29)",
      "surfaceVariant": "rgb(219, 228, 231)",
      "onSurfaceVariant": "rgb(64, 72, 75)",
      "outline": "rgb(112, 120, 124)",
      "outlineVariant": "rgb(191, 200, 203)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(46, 49, 50)",
      "inverseOnSurface": "rgb(239, 241, 242)",
      "inversePrimary": "rgb(87, 214, 246)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(238, 245, 247)",
        "level2": "rgb(231, 240, 244)",
        "level3": "rgb(223, 236, 240)",
        "level4": "rgb(221, 234, 238)",
        "level5": "rgb(216, 231, 236)"
      },
      "surfaceDisabled": "rgba(25, 28, 29, 0.12)",
      "onSurfaceDisabled": "rgba(25, 28, 29, 0.38)",
      "backdrop": "rgba(41, 50, 53, 0.4)"
  },
}

export default function App() {

  const [fontsLoaded] = useFonts({
    'FOS': require('./assets/fonts/Fontspring-DEMO-andesneue-black.otf'),
    'FOS-light': require('./assets/fonts/Fontspring-DEMO-andesneue-light.otf'),
    'FOS-medium': require('./assets/fonts/Fontspring-DEMO-andesneue-medium.otf'),
    'FOS-thin': require('./assets/fonts/Fontspring-DEMO-andesneue-thin.otf')
  })

  return (
      <PaperProvider style={styles.paperProvider} theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tak" component={NameListScreen} />
            <Stack.Screen name="Add" component={AddKidScreen} />
            <Stack.Screen name="Saldo" component={KidDetailScreen} />
            <Stack.Screen name="VeranderTak" component={VeranderVanTakScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  paperProvider: {
    flex: 1
  }
});
