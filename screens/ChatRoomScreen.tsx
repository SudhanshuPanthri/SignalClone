import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";

export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
