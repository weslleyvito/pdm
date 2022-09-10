import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Terminal from "./src/components/Terminal/index";

export default function App() {
  const [login, setLogin] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text>{login}</Text>

      <Text>Login: </Text>
      <TextInput
        onChange={(e) => setLogin(e.nativeEvent.text)}
        style={styles.input}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(21, 23, 30)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    backgroundColor: "gray",
  },
});
