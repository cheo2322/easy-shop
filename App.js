import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import * as Font from "expo-font";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Navigators
import Main from "./Navigators/Main";

// Screens
import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
