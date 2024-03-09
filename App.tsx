import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import Style from "./src/styles/screens/app.styles";

export default function App() {
  return (
    <SafeAreaView style={Style.container}>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
