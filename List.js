import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function List({ title, completed, onToggle, onRemove }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={onToggle}    
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
          {completed && <Text style={styles.checkMark}>✓</Text>}
        </View>

        <Text style={[styles.title, completed && styles.titleCompleted]}>
          {title + " "}
        </Text>
      </TouchableOpacity>
      {completed && (
        <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
          <Text style={styles.deleteText}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingRight: 10,
    minHeight: 60,
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
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
    fontSize: 12
  },
  title: {
    fontSize: 16,
    color: "#333",
    paddingRight: 40,
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  deleteButton: {
    position: 'absolute',
    right: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "#810000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
