import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  AlertNotificationComponent,
  ButtonComponent,
  CustomTextInput,
} from "../components";
import firestore from "@react-native-firebase/firestore";
import { ALERT_TYPE } from "react-native-alert-notification";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

export const Create = () => {
  const ref = firestore().collection("category");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);

  const navigate = useNavigation();

  function setData() {
    try {
      ref.add({
        uuid: uuid.v4(),
        title: title,
        description: description,
      });
      setTitle("");
      setDescription("");
      setAlertVisible(true);
      setTimeout(() => {
        navigate.navigate("ListCategory");
      }, 2000);
    } catch (error) {}
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#5A877D" }}>
      {" "}
      {/* Cor de fundo verde */}
      <SafeAreaView style={{ flex: 0, backgroundColor: "#5A877D" }} />{" "}
      {/* Área segura para a barra de status */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "#EDEDED" }}>
        Teste
      </SafeAreaView>
    </View>
    // <SafeAreaView  style={styles.container}>
    //   <SafeAreaView
    //     style={{
    //       flex: 1,
    //       backgroundColor: "#EDEDED",
    //       borderTopEndRadius: 25,
    //       borderTopStartRadius: 25,
    //     }}
    //   >
    //     <SafeAreaView  style={styles.notification}>
    //       <AlertNotificationComponent
    //         isVisible={isAlertVisible}
    //         type={ALERT_TYPE.SUCCESS}
    //         title="Success"
    //         textBody="Os dados forma salvos"
    //         autoClose={true}
    //       />
    //     </SafeAreaView>
    //     <SafeAreaView  style={styles.content}>
    //       <CustomTextInput
    //         value={title}
    //         onChangeText={(text) => setTitle(text)}
    //         placeholder="Titulo"
    //         keyboardType="default"
    //         autoCapitalize="characters"
    //         maxLength={30}
    //       />
    //       <CustomTextInput
    //         value={description}
    //         onChangeText={(text) => setDescription(text)}
    //         placeholder="Descrição"
    //         keyboardType="default"
    //         autoCapitalize="characters"
    //         maxLength={30}
    //       />

    //       <ButtonComponent title="Salvar" onPress={setData} color="#55847A" />
    //     </SafeAreaView>
    //   </SafeAreaView>
    // </SafeAreaView>
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
  notification: {
    position: "relative",
  },
});
