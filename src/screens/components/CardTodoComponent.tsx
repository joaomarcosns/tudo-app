import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

interface CardProps {
  title: string;
  status: boolean;
}

const CardTodoComponent: React.FC<CardProps> = ({ title, status }) => {
  const [isChecked, setIsChecked] = useState(status);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.card}>
      <Text style={[styles.cardTitle, isChecked && styles.checkedTitle]}>
        {title}
      </Text>
      <CheckBox checked={isChecked} onPress={toggleCheckbox} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  checkedTitle: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});

export default CardTodoComponent;
