import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  // console.warn(message);

  const sendMessage = () => {
    console.warn("Sending message : ");
    setMessage("");
  };

  const onPlusClicked = () => {
    console.warn("onplus clicked");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.rootContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name={"emotsmile"}
          size={24}
          color="#595959"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(newMessage) => setMessage(newMessage)}
          placeholder="Message...."
        />
        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
          style={styles.icon}
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={18} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" style={styles.icon} />
        )}
      </Pressable>
    </KeyboardAvoidingView>
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
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
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
