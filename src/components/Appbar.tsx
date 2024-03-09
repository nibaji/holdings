import { View } from "react-native";

import { Title } from "./Typography";

import Style from "../styles/components/appbar.styles";

export default function Appbar() {
  return (
    <View style={Style.bar}>
      <Title style={Style.title}>Upstox Holding</Title>
    </View>
  );
}
