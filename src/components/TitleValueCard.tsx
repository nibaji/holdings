import { View } from "react-native";

import { Title, Paragraph } from "./Typography";

import { TitleValueCard as TitleValueCardProps } from "../types/components/props.types";

import Style from "../styles/components/titleValueCard.styles";

export default function TitleValueCard({
  title,
  value,
  style,
}: TitleValueCardProps) {
  return (
    <View style={[Style.container, style]}>
      <Title>{title}</Title>
      <Paragraph>{value}</Paragraph>
    </View>
  );
}
