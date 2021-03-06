import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Image, Text, View, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/TabOneScreen";
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
const phoneWidth = Dimensions.get("window").width;
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader, headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  return (
    <View
      style={{
        width: phoneWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          marginLeft: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 20,
        }}
      >
        Signal
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Feather
          name="camera"
          size={20}
          color="black"
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
        />
        <Feather
          name="edit-2"
          size={20}
          color="black"
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
        />
      </View>
    </View>
  );
};

const ChatRoomHeader = (props) => {
  return (
    <View
      style={{
        width: phoneWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          marginLeft: 40,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          // marginLeft: 20,
        }}
      >
        {props.children}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Feather
          name="camera"
          size={20}
          color="black"
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
        />
        <Feather
          name="edit-2"
          size={20}
          color="black"
          style={{
            marginLeft: 20,
            marginRight: 20,
          }}
        />
      </View>
    </View>
  );
};
