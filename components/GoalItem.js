import { StyleSheet, Text, View, Pressable } from "react-native";

GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }} //ne fonction que pour android
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style = {({pressed})=> pressed && styles.pressedItem }  // Pour IOS
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
    padding: 6,
  },
  pressedItem : {
    opacity: 0.5
  }
});
