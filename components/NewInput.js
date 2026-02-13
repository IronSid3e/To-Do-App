import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from "react-native";
import React from "react";

export default function NewInput({ visible }) {
  return (
    <View>
      <Modal animationType="slide" visible={visible}>
        <View style= {styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/logo.png')}/>   
            <TextInput style= {styles.textInput} placeholder="Yeni Not Ekle.."/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button  title="İptal et" color="red"/>
            </View>
            <View style={styles.button}>
            <Button  title="Ekle" color="blue"/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {},
    image:{},
textInput:{},
buttonContainer:{},
button: {}
});
