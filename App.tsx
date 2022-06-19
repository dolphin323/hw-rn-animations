import { StyleSheet, View } from "react-native";

import { HorizontalScroll } from "./screens/HorizontalScroll";

export default function App() {
  return (
    <View style={styles.container}>
      <HorizontalScroll />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
