import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import { useState } from "react";
import NewInput from "./components/NewInput";
import { useStore } from "./lib/store";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const elements = useStore((state) => state.elements);
  const deleteTask = useStore((state) => state.deleteTask);

  const startModal = () => setModalIsVisible(true);
  const endModal = () => setModalIsVisible(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>To-Do List</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
          onPress={startModal}
        >
          <Text style={styles.addButtonText}>+ Add New Task</Text>
        </Pressable>

        <NewInput
          visible={modalIsVisible}
          onCancel={endModal}
        />

        <View style={styles.listContainer}>
          <FlatList
            data={elements}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
            renderItem={({ item }) => (
              <Pressable 
                onPress={() => deleteTask(item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
              >
                <View style={styles.itemCard}>
                  <Text style={styles.itemText}>{item.text}</Text>
                </View>
              </Pressable>
            )}
            contentContainerStyle={{ paddingBottom: 50 }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#1e293b",
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e2e8f0",
  },
  addButton: {
    backgroundColor: "#38bdf8",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  addButtonPressed: {
    opacity: 0.7,
  },
  addButtonText: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
  },
  itemCard: {
    backgroundColor: "#334155",
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#38bdf8",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    color: "white",
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
