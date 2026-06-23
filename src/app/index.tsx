import { Image } from "expo-image";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRightIcon } from "lucide-react-native";
import { layoutTheme } from "../../constants/theme";

export default function Index() {
  return (

    <View style={styles.launchScreen}>

      <Image
        source={require("@/assets/images/bmw.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>TIIRA</Text>

      <Pressable onPress={() => {alert("Submit")}} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
        <ChevronRightIcon size={24} color="white" />
      </Pressable>
      
    </View>


  );
}

const styles = StyleSheet.create({
  launchScreen: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",

  },
  title:{
    fontFamily: layoutTheme.fonts.iceberg.regular,
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    textTransform: "uppercase",
  },
  button: {
    padding: 16,
    borderRadius: 50,
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#c64949",
    minWidth: 243,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
