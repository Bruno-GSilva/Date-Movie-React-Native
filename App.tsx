import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/routes/stack.routes";
import { AlexBrush_400Regular, useFonts } from "@expo-google-fonts/alex-brush";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "alex-brush": AlexBrush_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
