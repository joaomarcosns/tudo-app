import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface MyButtonProps {
  title: string;
  onPress: () => void;
  color: string;
}

export const ButtonComponent: React.FC<MyButtonProps> = ({
  title,
  onPress,
  color,
}) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
