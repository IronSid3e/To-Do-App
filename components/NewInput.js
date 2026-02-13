import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function NewInput({ visible, onAddElement, onCancel }) {
  const [enteredText, setEnteredText] = useState("");

  const addNewElement = () => {
    onAddElement(enteredText);
    setEnteredText("");
  };

  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Yeni Not Ekle.."
          value={enteredText}
          onChangeText={textInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal et" color="#ff5c5c" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Ekle" color="#2196F3" onPress={addNewElement} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34495e",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 30,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "white",
    color: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    width: "45%",
  },
});
