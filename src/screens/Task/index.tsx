import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/CardComponent";
import CardTodoComponent from "../components/CardTodoComponent";

type ParamsProps = {
  uuid: string;
};

const taskList = [
  {
    id: "1",
    title: "Título 1",
    status: false,
  },
  {
    id: "2",
    title: "Título 2",
    status: false,
  },
  {
    id: "3",
    title: "Título ",
    status: false,
  },
  {
    id: "4",
    title: "Título 4",
    status: false,
  },
  // Adicione mais objetos de dados conforme necessário
  {
    id: "5",
    title: "Título 1",
    status: false,
  },
  {
    id: "6",
    title: "Título 2",
    status: false,
  },
  {
    id: "7",
    title: "Título 3",
    status: false,
  },
  {
    id: "8",
    title: "Título 4",
    status: false,
  },
  {
    id: "9",
    title: "Título 1",
    status: false,
  },
  {
    id: "10",
    title: "Título 2",
    status: false,
  },
  {
    id: "11",
    title: "Título 3",
    status: false,
  },
  {
    id: "",
    title: "Título 4",
    status: false,
  },
];

export function Task() {
  const route = useRoute();
  const { uuid } = route.params as ParamsProps;
  function handleCardPress() {
    console.log("====================================");
    console.log("e");
    console.log("====================================");
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={taskList}
          numColumns={1}
          keyExtractor={(task) => task.id}
          renderItem={({ item: task }) => (
            <CardTodoComponent title={task.title} status={task.status} />
          )}
          contentContainerStyle={styles.cardContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A877D",
  },
  taskContainer: {
    flex: 1,
    backgroundColor: "#EDEDED",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingStart: 15,
    paddingEnd: 15,
  },
  cardContainer: {
    marginTop: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 18,
    marginTop: 10,
  },
});
