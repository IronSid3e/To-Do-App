import {
  StyleSheet,
  View,
  Modal,
  Image,
  TextInput,
  Text,
  Pressable, // Button yerine Pressable kullanıyoruz
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
          placeholderTextColor="#94a3b8" // Placeholder rengini yumuşattık
          value={enteredText}
          onChangeText={textInputHandler}
        />

        <View style={styles.buttonContainer}>
          {/* İptal Butonu */}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonCancel,
                pressed && styles.pressed,
              ]}
              onPress={onCancel}
            >
              <Text style={styles.textStyle}>İptal et</Text>
            </Pressable>
          </View>

          {/* Ekle Butonu */}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonAdd,
                pressed && styles.pressed,
              ]}
              onPress={addNewElement}
            >
              <Text style={[styles.textStyle, styles.textAdd]}>Ekle</Text>
            </Pressable>
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
    backgroundColor: "#1e293b",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    borderWidth: 7,
    borderColor: "#38bdf8",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#334155",
    color: "white",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    width: "100%",
  },
  buttonWrapper: {
    width: '40%',
  },
  button: {
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: '#ef4444', 
  },
  buttonAdd: {
    backgroundColor: '#38bdf8',
  },
  pressed: {
    opacity: 0.75,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  },
  textAdd: {
    color: "#0f172a"
  }
});