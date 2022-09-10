import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Terminal(props) {
  return (
    <View style={styles.container}>
       <View style={styles.top}>
        <Text>{props.nome}</Text>
      </View>
      <View></View>
      <View>
        <Text>{props.descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width:"90%",
    height:50,
    borderRadius: 4,
    backgroundColor: "black",
    margin:4
  },
  top: {
    alignItems:"center",
    width:"100%",
    height:30,
    backgroundColor: "#262a31",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});
