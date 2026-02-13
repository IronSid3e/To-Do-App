import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {useState} from "react";

export default function App() {
  const [ModalIsVisible, setModalIsVisible] = useState(false);
  const startModel = () => {
    setModalIsVisible(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Not Ekle" color="#4a0000" onPress={startModel}/>
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
