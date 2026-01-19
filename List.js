import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function List({ title, completed, onToggle }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
        {completed && <Text style={styles.checkMark}>✓</Text>}
      </View>

      <Text style={[styles.title, completed && styles.titleCompleted]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#810000",
    borderRadius: 5,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#810000",
  },
  checkMark: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  titleCompleted: {
    textDecorationLine: "line-through", // Metnin üstünü çizer
    color: "#6969697a",
  },
});
