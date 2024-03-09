import { Text } from "react-native";

import { Typography as TypographyProps } from "../types/components/props.types";

import Style from "../styles/components/typography.styles";

export function Title({ children, style }: TypographyProps) {
  return <Text style={[Style.title, style]}>{children}</Text>;
}

export function Subtitle({ children, style }: TypographyProps) {
  return <Text style={[Style.subtitle, style]}>{children}</Text>;
}

export function Paragraph({ children, style }: TypographyProps) {
  return <Text style={[Style.p, style]}>{children}</Text>;
}

const Typography = {
  Title,
  Subtitle,
  Paragraph,
};

export default Typography;
