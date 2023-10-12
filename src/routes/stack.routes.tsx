import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Task } from "../screens/Task";

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
      <Screen name="Home" component={Home} options={{ title: "Categoria" }} />
      <Screen name="Task" component={Task} />
    </Navigator>
  );
}
