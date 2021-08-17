import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/core";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
  const route = useRoute();
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
