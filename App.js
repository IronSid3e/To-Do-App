import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import List from "./List";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const toggleTodo = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setList(newList);
  };

  const addToArray = () => {
    if (text && text.trim().length > 0) {
      const newTodo = {
        id: Math.random().toString(),
        title: text.trim(),
      };
      setList([newTodo, ...list]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.title}>My To Do List</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(val) => setText(val)}
          placeholder="Yeni görev..."
        />
        <TouchableOpacity style={styles.addButton} onPress={addToArray}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleTodo(item.id)}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#979797",
    paddingTop: 50,
  },
  headerBox: {
    backgroundColor: "#810000",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    padding: 15,
    textAlign: "center",
  },
  inputArea: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#000",
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#810000",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
