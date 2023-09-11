import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import MovieScreen from "../screens/movie";

const { Group, Navigator, Screen } = createStackNavigator();

export default function NavigationStack() {
  return (
    <Navigator initialRouteName="home">
      <Group
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="home" component={HomeScreen} />
        <Screen
          name="movie"
          component={MovieScreen}
          options={{ headerShown: true, headerTitle:"Voltar" }}
        />
      </Group>
    </Navigator>
  );
}
