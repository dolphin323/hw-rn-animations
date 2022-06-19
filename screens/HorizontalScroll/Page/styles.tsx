import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const SQUARE_SIDE = width / 1.25;

export const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: SQUARE_SIDE,
    height: SQUARE_SIDE,
    borderWidth: 5,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SQUARE_SIDE / 2,
  },
  text: {
    fontSize: 60,
    textTransform: "uppercase",
    fontWeight: "700",
    color: "white",
  },
  imageContainer: { position: "absolute" },
  image: { height: SQUARE_SIDE / 2, aspectRatio: 1 },
});
