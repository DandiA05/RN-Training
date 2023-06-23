import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Todo from "./pages/Todo";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* <ExpoStatusBar style="auto" /> */}
      <Todo />
      {/* <Text>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    // paddingTop: StatusBar.currentHeight + 20,
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 16,
  },
});
