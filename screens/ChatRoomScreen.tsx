import React from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
