import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
    backgroundColor: "white",
    paddingTop: 2,
    paddingBottom: 60,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "purple",
    opacity: 0.68,
  },
  triangleInverted: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "purple",
    opacity: 0.68,
  },
  separator: {
    marginBottom: 12,
  },
  expandedItems: {
    marginBottom: 12,
  },
  fixedBottomItem: {
    position: "absolute",
    bottom: 32,
  },
});

export default Styles;
