import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

import { Button, Icon } from "react-native-elements";

interface CardProps {
  title: string;
  description: string;
  taskCount: number;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  taskCount,
  onPress,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLongPress = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
      onLongPress={handleLongPress}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCount}>{taskCount} tasks</Text>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Button
                title="Editar"
                icon={<Icon name="edit" color="white" />} // Ícone "edit"
                buttonStyle={styles.button}
                onPress={() => {
                  // Lógica para editar
                  closeModal();
                }}
              />
              <Button
                title="Deletar"
                icon={<Icon name="delete" color="white" />} // Ícone "delete"
                buttonStyle={[styles.button, styles.deleteButton]}
                onPress={() => {
                  // Lógica para deletar
                  closeModal();
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    width: 165,
    height: 150,
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
  taskCount: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: 200,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  deleteButton: {
    backgroundColor: "#ff0000",
  },
});

export default Card;
