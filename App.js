import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View, FlatList, Text } from "react-native";
import { useState } from "react";
import NewInput from "./components/NewInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [elements, setElements] = useState([]);
  const startModal = () => {
    setModalIsVisible(true);
  };
  const endModal = () => {
    setModalIsVisible(false);
  };
  const addElement = (elementTitle) => {
    setElements((currentElements) => [
      ...currentElements,
      { text: elementTitle, id: Math.random().toString() },
    ]);
    endModal();
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Not Ekle" color="#4a0000" onPress={startModal} />
        <NewInput
          visible={modalIsVisible}
          onAddElement={addElement}
          onCancel={endModal}
        />
        <View>
          <FlatList
            data={elements}
            renderItem={({ item }) => (
              <View>
                <Text>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
