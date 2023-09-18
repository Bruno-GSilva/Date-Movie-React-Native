import 'react-native-gesture-handler'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DropdownProvider } from "../contexts/Dropdown";
import { ListProvider } from "../contexts/listContext";

// screens
import SplashScreen from "../screens/splash";
import HomeScreen from "../screens/home";
import MovieScreen from "../screens/movie";
import ListScreen from "../screens/list";

export default function NavigationStack() {
  const { Group, Navigator, Screen } = createNativeStackNavigator();

  return (
    <DropdownProvider>
      <ListProvider>
        <Navigator initialRouteName="splash">
          <Group
            screenOptions={{
              headerShown: false,
              animation:"slide_from_right"
            }}
          >
            <Screen
              name="home"
              component={HomeScreen}
              options={{ animation: "simple_push" }}
            />
              <Screen
                name="splash"
                component={SplashScreen}
              />
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
