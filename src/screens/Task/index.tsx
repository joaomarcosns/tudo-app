import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, CheckBox } from "react-native";

type ParamsProps = {
  uuid: string;
};

export function Task() {
  const route = useRoute();
  const { uuid } = route.params as ParamsProps;

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
        <Text style={styles.titulo}>Título do Componente</Text>
        <CheckBox
          value="true"
        />
        <Text style={styles.checkboxLabel}>
          Ativador
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A877D",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    marginTop: 20, // Adjust the marginTop
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
