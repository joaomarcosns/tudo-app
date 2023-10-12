import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Card from "../components/CardComponent";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Título 1",
    description: "Descrição do Card 1",
    task: 5,
  },
  {
    id: "2",
    title: "Título 2",
    description: "Descrição do Card 2",
    task: 3,
  },
  {
    id: "3",
    title: "Título 3",
    description: "Descrição do Card 3",
    task: 8,
  },
  {
    id: "4",
    title: "Título 4",
    description: "Descrição do Card 4",
    task: 2,
  },
  // Adicione mais objetos de dados conforme necessário
  {
    id: "5",
    title: "Título 1",
    description: "Descrição do Card 1",
    task: 5,
  },
  {
    id: "6",
    title: "Título 2",
    description: "Descrição do Card 2",
    task: 3,
  },
  {
    id: "7",
    title: "Título 3",
    description: "Descrição do Card 3",
    task: 8,
  },
  {
    id: "8",
    title: "Título 4",
    description: "Descrição do Card 4",
    task: 2,
  },
  {
    id: "9",
    title: "Título 1",
    description: "Descrição do Card 1",
    task: 5,
  },
  {
    id: "10",
    title: "Título 2",
    description: "Descrição do Card 2",
    task: 3,
  },
  {
    id: "11",
    title: "Título 3",
    description: "Descrição do Card 3",
    task: 8,
  },
  {
    id: "",
    title: "Título 4",
    description: "Descrição do Card 4",
    task: 2,
  },
];

export function Home() {
  const navigate = useNavigation();

  function handleCardPress(id: any) {
    navigate.navigate("Task", { uuid: id });
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#EDEDED",
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              description={item.description}
              taskCount={item.task}
              onPress={() => handleCardPress(item.id)}
            />
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
  cardContainer: {
    alignItems: "center",
    marginTop: 20, // Adjust the marginTop
    paddingBottom: 20,
  },
});
