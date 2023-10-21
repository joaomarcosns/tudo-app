import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Modal, Text } from "react-native";
import Card from "../components/CardComponent";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { FAB } from "react-native-elements";

type TCategory = {
  uuid: string;
  title: string;
  description: string;
  task: Task[];
};

interface Task {
  uuid: string;
  name: string;
  status: boolean;
}

export const List = () => {
  const navigate = useNavigation();

  const initialCategories: TCategory[] = [];
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(initialCategories);
  const [isOpen, setIsOpen] = useState(false);
  const ref = firestore().collection("category");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list: TCategory[] = [];
      querySnapshot.forEach((doc) => {
        const { uuid, title, description, task } = doc.data();
        list.push({ uuid, title, description, task });
      });
      setCategory(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  function handleCardPress(id: any) {
    navigate.navigate("Task", { uuid: id });
  }

  function handleCreatedCategory(id: any) {
    navigate.navigate("CreateCategory");
  }

  function openModal(value: boolean) {
    console.log(value);
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
          data={category}
          numColumns={2}
          keyExtractor={(item) => item.uuid}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              description={item.description}
              taskCount={item.task ? item.task.length : 0}
              onPress={() => handleCardPress(item.uuid)}
            />
          )}
          contentContainerStyle={styles.cardContainer}
        />
        <FAB
          visible={visible}
          onPress={handleCreatedCategory}
          placement="right"
          icon={{ name: "add", color: "white" }}
          color="green"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A877D",
  },
  cardContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
});
