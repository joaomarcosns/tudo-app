import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  AlertNotificationComponent,
  ButtonComponent,
  CustomTextInput,
} from "../components";
import { ALERT_TYPE } from "react-native-alert-notification";
import { useNavigation, useRoute } from "@react-navigation/native";
type ParamsProps = {
  uuid: string;
};

export const Update = () => {
  const navigate = useNavigation();
  const ref = firestore().collection("category");
  const route = useRoute();
  const { uuid } = route.params as ParamsProps;
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const querySnapshot = await ref.where("uuid", "==", uuid).get();
    querySnapshot.forEach((doc) => {
      const { title, description } = doc.data();
      setTitle(title);
      setDescription(description);
    });
    if (loading) {
      setLoading(false);
    }
  }

  function setData() {
    const data = {
      uuid: uuid,
      title: title,
      description: description,
    };
    ref
      .where("uuid", "==", data.uuid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref
            .update({
              title: data.title,
              description: data.description,
            })
            .then(() => {
              console.log("Documento atualizado com sucesso.");
              setAlertVisible(true);
              setTimeout(() => {
                navigate.navigate("ListCategory");
              }, 2000);
            })
            .catch((error) => {
              console.error("Erro ao atualizar o documento:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar o documento:", error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#EDEDED",
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
        }}
      >
        <View style={styles.notification}>
          <AlertNotificationComponent
            isVisible={isAlertVisible}
            type={ALERT_TYPE.SUCCESS}
            title="Success"
            textBody="Os dados foram alterados com sucesso!"
            autoClose={true}
          />
        </View>
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

          <ButtonComponent
            title="Atualizar"
            onPress={setData}
            color="#55847A"
          />
        </View>
      </View>
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
  content: {
    marginTop: 20,
    padding: 25,
  },
  notification: {
    position: "relative",
  },
});
