import { createStackNavigator } from "@react-navigation/stack";

// screens
import HomeScreen from "../screens/home";
import MovieScreen from "../screens/movie";
import ListScreen from "../screens/list";
import { DropdownProvider } from "../contexts/Dropdown";
import { ListProvider } from "../contexts/listContext";

export default function NavigationStack() {
  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <DropdownProvider>
      <ListProvider>
        <Navigator initialRouteName="home">
          <Group
            screenOptions={{
              headerShown: false,
            }}
          >
            <Screen name="home" component={HomeScreen} />
            <Screen
              name="movie"
              component={MovieScreen}
              options={{ headerShown: true, headerTitle: "Voltar" }}
            />
            <Screen
              name="list"
              component={ListScreen}
              options={{ headerShown: true, headerTitle: "Voltar" }}
            />
          </Group>
        </Navigator>
      </ListProvider>
    </DropdownProvider>
  );
}
