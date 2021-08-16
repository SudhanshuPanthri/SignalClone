import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const MessageInput = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name={"emotsmile"}
          size={24}
          color="grey"
          style={styles.icon}
        />
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.button}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#3777f0",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default MessageInput;
