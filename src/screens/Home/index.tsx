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

export function Home() {
  const navigate = useNavigation();

  const initialCategories: TCategory[] = [];
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(initialCategories);
  const [isOpen, setIsOpen] = useState(false);
  const ref = firestore().collection("category");
  const [visible, setVisible] = useState(true);
  const [shoModal, setShoModal] = useState(false);

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

  function setData() {
    // ref.add({
    //   uuid: "75adbf26-618e-4c4b-a240-44141bd6943b",
    //   title: "Teste",
    //   description: "Teste 0205",
    //   task: [
    //     {
    //       uuid: "d9b86b03-401d-4ed8-8202-ec99b3133e73",
    //       title: "Teste",
    //       description: "Teste 0205",
    //     },
    //   ],
    // });
    console.log("====================================");
    console.log("set Data");
    console.log("====================================");
  }

  function handleCardPress(id: any) {
    navigate.navigate("Task", { uuid: id });
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
          onPress={() => setShoModal(true)}
          placement="right"
          icon={{ name: "add", color: "white" }}
          color="green"
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
    marginTop: 20,
    paddingBottom: 20,
  },
});
