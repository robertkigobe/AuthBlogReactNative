import { Text, StyleSheet } from "react-native";
import Colors from "./Colors";

function Webtext({children}) {
  return <Text style={styles.paragraphText}>{children}</Text>;
}
export default Webtext;

const styles = StyleSheet.create({
  paragraphText: {
    fontFamily: "open-sans",
    // color: Colors.accent500,
    fontSize: 15,
    padding: 10,
  },
});