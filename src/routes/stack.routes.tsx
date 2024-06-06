import { createStackNavigator } from "@react-navigation/stack";
import { Task } from "../screens/Task";
import { Create, List, Update } from "../screens/Home";
const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5A877D",
          height: 100,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 1,
          shadowRadius: 3.84,
          elevation: 15,
          shadowColor: "transparent",
        },
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name="ListCategory"
        component={List}
        options={{ title: "Categoria" }}
      />
      <Screen
        name="CreateCategory"
        component={Create}
        options={{ title: "Cadastro de Categoria" }}
      />
      <Screen
        name="UpdateCategory"
        component={Update}
        options={{ title: "Atualizar Categoria" }}
      />
      <Screen name="Task" component={Task} />
    </Navigator>
  );
}
