import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  function goToTask() {
    navigation.navigate("Task");
  }
  return (
    <View>
      <Text>Home</Text>

      <Button title="Ir para outra tela" onPress={goToTask} />
    </View>
  );
}
