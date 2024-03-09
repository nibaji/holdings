import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
    backgroundColor: "white",
    paddingTop: 4,
    paddingBottom: 60,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 14,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "purple",
  },
  triangleInverted: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 14,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "purple",
  },
  separator: {
    marginBottom: 12,
  },
  fixedBottomItem: {
    position: "absolute",
    bottom: 32,
  },
});

export default Styles;
