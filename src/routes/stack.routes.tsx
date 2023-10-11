import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home';
import { Task } from '../screens/Task';


const { Screen, Navigator } = createStackNavigator();


export function StackRoutes() {
    return (
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Task" component={Task} />
      </Navigator>
    );
}