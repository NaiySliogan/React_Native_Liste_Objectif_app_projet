import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source = {require("../assets/images/goal.png")} style = {styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Votre Objectif !"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.textContainer}>
          <View style={styles.button}>
            <Button title="Ajouter" onPress={addGoalHandler} color = "#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Annuler" onPress={props.onClose} color = "#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor : "#e4d0ff",
    color : "#120438",
    borderRadius: 6 ,
    width: "100%",
    // marginRight: 8,
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
  },
  image : {
    width : 100,
    height : 100,
    margin: 20
  }
});
