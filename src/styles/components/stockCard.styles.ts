import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  verticalWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  endAligned: {
    alignItems: "flex-end",
  },
  bottomSpacing: {
    marginBottom: 8,
  },
});

export default Styles;
