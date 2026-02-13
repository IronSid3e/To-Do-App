import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {useState} from "react";
import NewInput from "./components/NewInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const startModel = () => {
    setModalIsVisible(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Not Ekle" color="#4a0000" onPress={startModel}/>
        <NewInput visible = {modalIsVisible}></NewInput>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
});
