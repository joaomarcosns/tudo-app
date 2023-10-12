import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CardProps {
  title: string;
  description: string;
  taskCount: number;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, taskCount, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCount}>{taskCount} tasks</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    padding: 20,
    margin: 10,
  },
  card: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  taskInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  taskIcon: {
    fontSize: 24,
    marginRight: 5,
  },
  taskCount: {
    fontSize: 16,
  },
});

export default Card;
