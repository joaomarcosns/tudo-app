import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

export function Home() {
  const navigation = useNavigation();
  const ref = firestore().collection("category");

  function goToTask() {
    navigation.navigate("Task");
  }

  async function addTodo() {
    try {
      await ref.add({
        title: "teste",
        complete: false,
        task: [
          {
            title: "teste task 1",
            complete: false,
          },
          {
            title: "teste task 2",
            complete: false,
          },
        ],
      });
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }
  return (
    <View>
      <Text>Home</Text>

      <Button title="Ir para outra tela" onPress={goToTask} />
      <Text>Salvar Firebase</Text>
      <Button title="Salvar" onPress={addTodo} />
    </View>
  );
}
