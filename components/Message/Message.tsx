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
  container: {},
  text: {},
});

export default Message;
