import { NavigationContainer } from "@react-navigation/native";

import NavigationStack from "./src/routes/stack.routes";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
