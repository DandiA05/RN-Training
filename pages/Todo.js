import React, { useReducer, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const initialState = {
  todos: [],
  title: "",
};

const actions = {
  CHANGE_TITLE: "change_title",
  ADD_TODO: "add_todo",
};

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const [state, dispatch] = useReducer();
  const addTodo = () => {
    if (!title) return;

    const newTodos = todos.splice(0);
    newTodos.push(title);

    setTodos(newTodos);
    setTitle();
  };

  console.log(todos);

  return (
    <View>
      <Text>TODO</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={(text) => setTitle(text)}
        />
        <Button title="Submit" onPress={() => addTodo()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 8,
    flexDirection: "row",
    columnGap: 8,
  },
});

export default Todo;
