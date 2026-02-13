import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import NewInput from "./components/NewInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const startModal = () => {
    setModalIsVisible(true);
  };
  const endModal = () => {
    setModalIsVisible(false);
  };
  const addElement = (elemetTitle) => {
    endModal();
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Not Ekle" color="#4a0000" onPress={startModal} />
        <NewInput visible={modalIsVisible} onAddElement={addElement} onCancel={endModal}></NewInput>
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
