import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ButtonComponent, CustomTextInput } from "../components";
import firestore from "@react-native-firebase/firestore";
import uuid from "react-native-uuid";

export const Create = () => {
  const ref = firestore().collection("category");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function setData() {
    ref.add({
      uuid: uuid.v4(),
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
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
        <View style={styles.content}>
          <CustomTextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            placeholder="Titulo"
            keyboardType="default"
            autoCapitalize="characters"
            maxLength={30}
          />
          <CustomTextInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="Descrição"
            keyboardType="default"
            autoCapitalize="characters"
            maxLength={30}
          />

          <ButtonComponent title="Salvar" onPress={setData} color="#55847A" />
        </View>
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
  content: {
    marginTop: 20,
    padding: 25,
  },
});
