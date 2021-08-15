import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Beep Boop Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "75%",
  },
  text: {
    color: "#fff",
  },
});

export default Message;
