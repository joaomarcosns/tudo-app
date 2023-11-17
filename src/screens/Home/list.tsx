import React, { useEffect, useState } from "react";
const { width, height } = Dimensions.get("window");
import {
  View,
  FlatList,
  StyleSheet,
  Modal,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { FAB } from "react-native-elements";
import { Card } from "../components";

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

type IId = {
  uuid: string;
};

export const List = () => {
  const navigate = useNavigation();

  const initialCategories: TCategory[] = [];
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(initialCategories);
  const [isOpen, setIsOpen] = useState(false);
  const ref = firestore().collection("category");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
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
  }

  function handleCardPress(id: string) {
    navigate.navigate("Task", { uuid: id });
  }

  function handleCreatedCategory() {
    navigate.navigate("CreateCategory");
  }

  const deleteCategory = (uuid: string) => {
    ref
      .where("uuid", "==", uuid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref
            .delete()
            .then(() => {
              console.log("Documento apagado com sucesso.");
              getData();
            })
            .catch((error) => {
              console.error("Erro ao apagar o documento:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar o documento:", error);
      });
  };
  const editCategory = (uuid: string) => {
    console.log("====================================");
    console.log(`To aqui no edit ${uuid}`);
    console.log("====================================");
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView
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
              onDelete={() => deleteCategory(item.uuid)}
              onEdit={() => editCategory(item.uuid)}
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
      </SafeAreaView>
    </SafeAreaView>
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

export default List;
